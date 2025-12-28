"""
Test Supabase connection and verify all tables exist
Then add demo records to all tables
Run: python test_supabase.py
"""

import os
from dotenv import load_dotenv
from supabase import create_client, Client
import bcrypt
from datetime import datetime

# Load environment variables
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# Define all tables to test
ALL_TABLES = [
    "hospitals",
    "users",
    "patients",
    "appointments",
    "operations",
    "admin_users",
    "user_sessions",
    "payments",
    "notifications",
    "cities"
]

print("="*60)
print("🧪 Testing Supabase Connection & All Tables")
print("="*60)
print(f"Supabase URL: {SUPABASE_URL[:50]}..." if SUPABASE_URL else "❌ SUPABASE_URL not set")
print(f"Supabase Key: {SUPABASE_KEY[:20]}..." if SUPABASE_KEY else "❌ SUPABASE_KEY not set")
print()

if not SUPABASE_URL or not SUPABASE_KEY:
    print("❌ ERROR: Please set SUPABASE_URL and SUPABASE_KEY in .env file")
    print("\nTo get your Supabase credentials:")
    print("1. Go to https://supabase.com")
    print("2. Create a project or select existing project")
    print("3. Go to Project Settings > API")
    print("4. Copy 'Project URL' to SUPABASE_URL")
    print("5. Copy 'anon public' key to SUPABASE_KEY")
    exit(1)

try:
    # Initialize Supabase client
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
    print("✅ Supabase client created successfully")
    
    # Test connection and all tables
    print("\n📡 Testing database connection and all tables...")
    print("-" * 60)
    
    table_results = {
        "passed": [],
        "failed": []
    }
    
    # Test each table
    for table_name in ALL_TABLES:
        try:
            # Try to query the table (just get count or first record)
            result = supabase.table(table_name).select("id", count="exact").limit(1).execute()
            
            # Get count if available
            count = result.count if hasattr(result, 'count') else len(result.data) if result.data else 0
            
            print(f"✅ {table_name:20s} - EXISTS (Records: {count})")
            table_results["passed"].append(table_name)
            
        except Exception as e:
            error_msg = str(e)
            if "Could not find the table" in error_msg or "PGRST205" in error_msg:
                print(f"❌ {table_name:20s} - NOT FOUND (Table doesn't exist)")
            else:
                print(f"⚠️  {table_name:20s} - ERROR: {error_msg[:50]}")
            table_results["failed"].append(table_name)
    
    print("-" * 60)
    print(f"\n📊 Table Test Summary:")
    print(f"   ✅ Passed: {len(table_results['passed'])}/{len(ALL_TABLES)} tables")
    print(f"   ❌ Failed: {len(table_results['failed'])}/{len(ALL_TABLES)} tables")
    
    if table_results["failed"]:
        print(f"\n⚠️  Missing tables: {', '.join(table_results['failed'])}")
        print("\n💡 To fix:")
        print("   1. Open Supabase SQL Editor")
        print("   2. Run the SQL from supabase_schema.sql")
        print("   3. Make sure all CREATE TABLE statements are executed")
        print("\n❌ Cannot proceed with demo data - some tables are missing!")
        exit(1)
    else:
        print("\n✅ All tables exist and are accessible!")
    
except Exception as e:
    print(f"❌ ERROR: Could not connect to Supabase: {e}")
    print("\nPlease check:")
    print("1. Your SUPABASE_URL is correct")
    print("2. Your SUPABASE_KEY is correct")
    print("3. Your Supabase project is active")
    print("4. You have run the SQL migration to create tables")
    exit(1)

# ============================================
# ADD DEMO RECORDS
# ============================================
print("\n" + "="*60)
print("📝 Adding Demo Records to All Tables")
print("="*60)

# ============================================
# 1. DEMO HOSPITAL
# ============================================
print("\n1️⃣  Adding demo hospital...")
try:
    hospital_data = {
        "name": "Demo Hospital",
        "email": "demo@hospital.com",
        "mobile": "9876543210",
        "status": "approved",
        "address_line1": "123 Hospital Street",
        "address_line2": "Medical District",
        "city": "Mumbai",
        "state": "Maharashtra",
        "pincode": "400001",
        "whatsapp_enabled": True,
        "whatsapp_number": "9876543210",
        "default_upi_id": "demo@upi",
        "google_pay_upi_id": "demo@okaxis",
        "phonepe_upi_id": "demo@ybl",
        "paytm_upi_id": "demo@paytm",
        "bhim_upi_id": "demo@upi"
    }
    
    # Check if demo hospital exists
    existing = supabase.table("hospitals").select("id").eq("email", "demo@hospital.com").execute()
    if existing.data:
        print("   ℹ️  Demo hospital already exists, updating...")
        result = supabase.table("hospitals").update(hospital_data).eq("email", "demo@hospital.com").execute()
        hospital_id = existing.data[0]["id"]
    else:
        result = supabase.table("hospitals").insert(hospital_data).execute()
        hospital_id = result.data[0]["id"] if result.data else None
    
    if hospital_id:
        print(f"   ✅ Demo hospital added/updated (ID: {hospital_id})")
    else:
        print("   ❌ Failed to add demo hospital")
        hospital_id = None
except Exception as e:
    print(f"   ❌ Error adding demo hospital: {e}")
    hospital_id = None

# ============================================
# 2. DEMO DOCTOR
# ============================================
print("\n2️⃣  Adding demo doctor...")
try:
    password_hash = bcrypt.hashpw("doctor123".encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    doctor_data = {
        "name": "Dr. John Smith",
        "mobile": "9876543211",
        "email": "doctor@demo.com",
        "password_hash": password_hash,
        "role": "doctor",
        "address_line1": "456 Doctor Lane",
        "city": "Mumbai",
        "state": "Maharashtra",
        "pincode": "400002",
        "degree": "MBBS, MD",
        "institute_name": "Medical College",
        "experience1": "5 years in General Medicine",
        "doctor_name": "Dr. John Smith",
        "place": "Mumbai",
        "patient_referred_name": "Demo Patient",
        "problem": "General Checkup",
        "patient_mobile": "9876543212",
        "ref_no": "REF001",
        "is_active": True
    }
    
    existing = supabase.table("users").select("id").eq("mobile", "9876543211").execute()
    if existing.data:
        print("   ℹ️  Demo doctor already exists, updating...")
        doctor_data.pop("password_hash", None)  # Don't update password
        result = supabase.table("users").update(doctor_data).eq("mobile", "9876543211").execute()
        doctor_id = existing.data[0]["id"]
    else:
        result = supabase.table("users").insert(doctor_data).execute()
        doctor_id = result.data[0]["id"] if result.data else None
    
    if doctor_id:
        print(f"   ✅ Demo doctor added/updated (ID: {doctor_id})")
        print(f"      Login: Mobile: 9876543211, Password: doctor123")
    else:
        print("   ❌ Failed to add demo doctor")
        doctor_id = None
except Exception as e:
    print(f"   ❌ Error adding demo doctor: {e}")
    doctor_id = None

# ============================================
# 3. DEMO PHARMA PROFESSIONAL
# ============================================
print("\n3️⃣  Adding demo pharma professional...")
try:
    password_hash = bcrypt.hashpw("pharma123".encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    pharma_data = {
        "name": "Pharma Professional",
        "mobile": "9876543213",
        "email": "pharma@demo.com",
        "password_hash": password_hash,
        "role": "pharma",
        "address_line1": "789 Pharma Street",
        "city": "Mumbai",
        "state": "Maharashtra",
        "pincode": "400003",
        "hospital_id": hospital_id,
        "company_name": "Demo Pharma Company",
        "product1": "Medicine A",
        "product2": "Medicine B",
        "product3": "Medicine C",
        "product4": "Medicine D",
        "is_active": True
    }
    
    existing = supabase.table("users").select("id").eq("mobile", "9876543213").execute()
    if existing.data:
        print("   ℹ️  Demo pharma already exists, updating...")
        pharma_data.pop("password_hash", None)
        result = supabase.table("users").update(pharma_data).eq("mobile", "9876543213").execute()
        pharma_id = existing.data[0]["id"]
    else:
        result = supabase.table("users").insert(pharma_data).execute()
        pharma_id = result.data[0]["id"] if result.data else None
    
    if pharma_id:
        print(f"   ✅ Demo pharma professional added/updated (ID: {pharma_id})")
        print(f"      Login: Mobile: 9876543213, Password: pharma123")
    else:
        print("   ❌ Failed to add demo pharma professional")
        pharma_id = None
except Exception as e:
    print(f"   ❌ Error adding demo pharma: {e}")
    pharma_id = None

# ============================================
# 4. DEMO PATIENT
# ============================================
print("\n4️⃣  Adding demo patient...")
try:
    patient_data = {
        "name": "Demo Patient",
        "mobile": "9876543214",
        "email": "patient@demo.com",
        "place": "Mumbai",
        "address_line1": "321 Patient Street",
        "city": "Mumbai",
        "state": "Maharashtra",
        "pincode": "400004",
        "gender": "male"
    }
    
    existing = supabase.table("patients").select("id").eq("mobile", "9876543214").execute()
    if existing.data:
        print("   ℹ️  Demo patient already exists, updating...")
        result = supabase.table("patients").update(patient_data).eq("mobile", "9876543214").execute()
        patient_id = existing.data[0]["id"]
    else:
        result = supabase.table("patients").insert(patient_data).execute()
        patient_id = result.data[0]["id"] if result.data else None
    
    if patient_id:
        print(f"   ✅ Demo patient added/updated (ID: {patient_id})")
    else:
        print("   ❌ Failed to add demo patient")
        patient_id = None
except Exception as e:
    print(f"   ❌ Error adding demo patient: {e}")
    patient_id = None

# ============================================
# 5. DEMO APPOINTMENT
# ============================================
print("\n5️⃣  Adding demo appointment...")
try:
    if hospital_id and patient_id:
        appointment_data = {
            "patient_id": patient_id,
            "patient_name": "Demo Patient",
            "patient_mobile": "9876543214",
            "place": "Mumbai",
            "hospital_id": hospital_id,
            "appointment_date": "2024-12-30",
            "appointment_time": "10:30 AM",
            "payment_method": "googlepay",
            "payment_status": "completed",
            "payment_amount": 500.00,
            "status": "confirmed"
        }
        
        result = supabase.table("appointments").insert(appointment_data).execute()
        if result.data:
            appointment_id = result.data[0]["id"]
            print(f"   ✅ Demo appointment added (ID: {appointment_id})")
        else:
            print("   ❌ Failed to add demo appointment")
    else:
        print("   ⚠️  Skipping (hospital or patient not available)")
except Exception as e:
    print(f"   ❌ Error adding demo appointment: {e}")

# ============================================
# 6. DEMO OPERATION
# ============================================
print("\n6️⃣  Adding demo operation...")
try:
    if hospital_id and patient_id and doctor_id:
        operation_data = {
            "patient_id": patient_id,
            "patient_name": "Demo Patient",
            "patient_mobile": "9876543214",
            "place": "Mumbai",
            "hospital_id": hospital_id,
            "doctor_id": doctor_id,
            "operation_date": "2025-01-05",
            "operation_time": "2:00 PM",
            "specialty": "surgery",
            "operation_type": "Minor Surgery",
            "payment_method": "phonepe",
            "payment_status": "completed",
            "payment_amount": 5000.00,
            "status": "confirmed"
        }
        
        result = supabase.table("operations").insert(operation_data).execute()
        if result.data:
            operation_id = result.data[0]["id"]
            print(f"   ✅ Demo operation added (ID: {operation_id})")
        else:
            print("   ❌ Failed to add demo operation")
    else:
        print("   ⚠️  Skipping (hospital, patient, or doctor not available)")
except Exception as e:
    print(f"   ❌ Error adding demo operation: {e}")

# ============================================
# 7. DEMO ADMIN USER
# ============================================
print("\n7️⃣  Adding demo admin user...")
try:
    password_hash = bcrypt.hashpw("Uabiotech*2309".encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    admin_data = {
        "username": "anagha",
        "password_hash": password_hash,
        "email": "info@uabiotech.in",
        "full_name": "Anagha Admin",
        "role": "admin",
        "is_active": True
    }
    
    existing = supabase.table("admin_users").select("id").eq("username", "anagha").execute()
    if existing.data:
        print("   ℹ️  Admin user already exists, updating password...")
        result = supabase.table("admin_users").update({
            "password_hash": password_hash,
            "last_login_at": None
        }).eq("username", "anagha").execute()
        admin_id = existing.data[0]["id"]
    else:
        result = supabase.table("admin_users").insert(admin_data).execute()
        admin_id = result.data[0]["id"] if result.data else None
    
    if admin_id:
        print(f"   ✅ Admin user added/updated (ID: {admin_id})")
        print(f"      Login: Username: anagha, Password: Uabiotech*2309")
    else:
        print("   ❌ Failed to add admin user")
except Exception as e:
    print(f"   ❌ Error adding admin user: {e}")

# ============================================
# 8. DEMO CITY
# ============================================
print("\n8️⃣  Adding demo cities...")
try:
    demo_cities = [
        {"city_name": "Mumbai", "state_name": "Maharashtra", "source": "manual"},
        {"city_name": "Delhi", "state_name": "Delhi", "source": "manual"},
        {"city_name": "Bangalore", "state_name": "Karnataka", "source": "manual"},
    ]
    
    cities_added = 0
    for city_data in demo_cities:
        existing = supabase.table("cities").select("id").eq("city_name", city_data["city_name"]).execute()
        if not existing.data:
            result = supabase.table("cities").insert(city_data).execute()
            if result.data:
                cities_added += 1
    
    if cities_added > 0:
        print(f"   ✅ Added {cities_added} demo cities")
    else:
        print(f"   ℹ️  All demo cities already exist")
except Exception as e:
    print(f"   ❌ Error adding demo cities: {e}")

# ============================================
# SUMMARY
# ============================================
print("\n" + "="*60)
print("📊 Final Summary - All Tables Verified")
print("="*60)

try:
    # Count records in each table
    print("\n📈 Record Counts:")
    print("-" * 60)
    
    for table_name in ALL_TABLES:
        try:
            result = supabase.table(table_name).select("id", count="exact").execute()
            count = result.count if hasattr(result, 'count') else len(result.data) if result.data else 0
            print(f"   {table_name:20s}: {count:4d} records")
        except Exception as e:
            print(f"   {table_name:20s}: ERROR - {str(e)[:40]}")
    
    print("-" * 60)
    print("\n✅ TEST COMPLETE - All tables tested and demo records added!")
    print("="*60)
    print("\n📋 Demo Credentials:")
    print("   Admin: anagha / Uabiotech*2309")
    print("   Doctor: 9876543211 / doctor123")
    print("   Pharma: 9876543213 / pharma123")
    print("\n🌐 Next Steps:")
    print("   1. All tables are verified and working")
    print("   2. Demo data has been added")
    print("   3. Start the server: python server.py")
    print("   4. Test the API endpoints")
    
except Exception as e:
    print(f"❌ Error generating summary: {e}")
