#!/usr/bin/env python3
"""
Import cities from city.csv to Supabase cities table
Run: python import_cities_from_csv.py
"""

import os
import csv
from dotenv import load_dotenv
from supabase import create_client, Client
from datetime import datetime

# Load environment variables
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

CSV_FILE = "city.csv"
BATCH_SIZE = 1000  # Insert in batches to avoid timeouts

print("="*60)
print("📥 Importing Cities from CSV to Supabase")
print("="*60)

if not SUPABASE_URL or not SUPABASE_KEY:
    print("❌ ERROR: Please set SUPABASE_URL and SUPABASE_KEY in .env file")
    exit(1)

if not os.path.exists(CSV_FILE):
    print(f"❌ ERROR: {CSV_FILE} not found in current directory")
    exit(1)

try:
    # Initialize Supabase client
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
    print("✅ Supabase client created successfully")
    
    # Read CSV and extract unique cities
    print(f"\n📖 Reading {CSV_FILE}...")
    cities_dict = {}  # Use dict to ensure uniqueness by city_name
    
    with open(CSV_FILE, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        total_rows = 0
        
        for row in reader:
            total_rows += 1
            if total_rows % 10000 == 0:
                print(f"   Processed {total_rows:,} rows...")
            
            # Extract city name from officename (remove .B.O, .SO, etc.)
            officename = row.get('officename', '').strip().strip('"')
            if not officename:
                continue
            
            # Clean up city name (remove post office suffixes)
            city_name = officename.replace(' B.O', '').replace(' SO', '').replace(' HO', '').strip()
            if not city_name:
                continue
            
            # Use city_name as key to ensure uniqueness
            if city_name not in cities_dict:
                cities_dict[city_name] = {
                    "city_name": city_name,
                    "state_name": row.get('statename', '').strip().strip('"') or None,
                    "district_name": row.get('district', '').strip().strip('"') or None,
                    "pincode": row.get('pincode', '').strip().strip('"') or None,
                    "source": "government",
                    "is_active": True,
                    "created_at": datetime.now().isoformat()
                }
    
    print(f"✅ Found {len(cities_dict):,} unique cities from {total_rows:,} CSV rows")
    
    # Get existing cities from database to avoid duplicates
    print("\n🔍 Checking existing cities in database...")
    existing_cities = set()
    try:
        result = supabase.table("cities").select("city_name").execute()
        existing_cities = {city["city_name"].lower() for city in result.data}
        print(f"   Found {len(existing_cities):,} existing cities")
    except Exception as e:
        print(f"   ⚠️  Could not fetch existing cities: {e}")
        print("   Will insert all cities (may have duplicates)")
    
    # Filter out existing cities
    cities_to_insert = []
    for city_data in cities_dict.values():
        city_name_lower = city_data["city_name"].lower()
        if city_name_lower not in existing_cities:
            cities_to_insert.append(city_data)
            existing_cities.add(city_name_lower)  # Add to set to prevent duplicates in batch
    
    print(f"✅ {len(cities_to_insert):,} new cities to insert")
    
    if not cities_to_insert:
        print("\n✅ All cities already exist in database!")
        exit(0)
    
    # Insert cities in batches
    print(f"\n💾 Inserting cities in batches of {BATCH_SIZE}...")
    total_inserted = 0
    total_failed = 0
    
    for i in range(0, len(cities_to_insert), BATCH_SIZE):
        batch = cities_to_insert[i:i + BATCH_SIZE]
        batch_num = (i // BATCH_SIZE) + 1
        total_batches = (len(cities_to_insert) + BATCH_SIZE - 1) // BATCH_SIZE
        
        try:
            result = supabase.table("cities").insert(batch).execute()
            inserted_count = len(result.data) if result.data else len(batch)
            total_inserted += inserted_count
            print(f"   ✅ Batch {batch_num}/{total_batches}: Inserted {inserted_count} cities")
        except Exception as e:
            error_msg = str(e)
            # Try inserting one by one if batch fails
            if "duplicate" in error_msg.lower() or "unique" in error_msg.lower():
                print(f"   ⚠️  Batch {batch_num}/{total_batches}: Duplicates found, inserting individually...")
                for city in batch:
                    try:
                        supabase.table("cities").insert(city).execute()
                        total_inserted += 1
                    except:
                        total_failed += 1
            else:
                print(f"   ❌ Batch {batch_num}/{total_batches}: Error - {error_msg[:100]}")
                total_failed += len(batch)
    
    print("\n" + "="*60)
    print("📊 Import Summary")
    print("="*60)
    print(f"   Total unique cities in CSV: {len(cities_dict):,}")
    print(f"   New cities inserted: {total_inserted:,}")
    print(f"   Failed: {total_failed:,}")
    print(f"   ✅ Import complete!")
    print("="*60)
    
except Exception as e:
    print(f"\n❌ ERROR: {e}")
    import traceback
    traceback.print_exc()
    exit(1)

