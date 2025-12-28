"""
Package-based access control and rate limiting for hospitals
"""
from datetime import datetime, timedelta
from typing import Optional, Dict, Any, Tuple
import config

def get_hospital_subscription(hospital_id: int) -> Optional[Dict[str, Any]]:
    """
    Get active subscription for a hospital
    Returns None if no active subscription found
    """
    if not supabase:
        return None
    
    try:
        result = supabase.table("hospital_subscriptions").select("*").eq(
            "hospital_id", hospital_id
        ).eq("status", "active").gte(
            "subscription_end_date", datetime.now().date().isoformat()
        ).order("subscription_end_date", desc=True).limit(1).execute()
        
        if result.data:
            return result.data[0]
        return None
    except Exception as e:
        print(f"Error getting hospital subscription: {e}")
        return None

def check_rate_limit(hospital_id: int, entity_type: str) -> Tuple[bool, str]:
    """
    Check if hospital has exceeded rate limit for given entity type
    Returns (is_allowed, message)
    entity_type: 'appointment', 'operation', 'pharma_appointment'
    """
    subscription = get_hospital_subscription(hospital_id)
    
    if not subscription:
        return (False, "No active subscription found. Please subscribe to a package.")
    
    # Check if subscription is expired
    end_date = datetime.strptime(subscription['subscription_end_date'], '%Y-%m-%d').date()
    if end_date < datetime.now().date():
        return (False, "Subscription has expired. Please renew your subscription.")
    
    # Get current month limits
    current_month = datetime.now().replace(day=1).date()
    subscription_start = datetime.strptime(subscription['subscription_start_date'], '%Y-%m-%d').date()
    
    # Reset counters if new month
    if subscription_start < current_month:
        # Reset counters (this should be done by a scheduled job, but we check here)
        pass
    
    # Check limits based on entity type
    if entity_type == 'appointment':
        current = subscription.get('current_month_appointments', 0)
        limit = subscription.get('rate_limit_appointments', 100)
        if current >= limit:
            return (False, f"Monthly appointment limit ({limit}) reached. Please upgrade your package.")
        return (True, f"Allowed ({current}/{limit} appointments used)")
    
    elif entity_type == 'operation':
        current = subscription.get('current_month_operations', 0)
        limit = subscription.get('rate_limit_operations', 10)
        if current >= limit:
            return (False, f"Monthly operation limit ({limit}) reached. Please upgrade your package.")
        return (True, f"Allowed ({current}/{limit} operations used)")
    
    elif entity_type == 'pharma_appointment':
        current = subscription.get('current_month_pharma_appointments', 0)
        limit = subscription.get('rate_limit_pharma_appointments', 50)
        if current >= limit:
            return (False, f"Monthly pharma appointment limit ({limit}) reached. Please upgrade your package.")
        return (True, f"Allowed ({current}/{limit} pharma appointments used)")
    
    return (False, "Unknown entity type")

def increment_usage(hospital_id: int, entity_type: str) -> bool:
    """
    Increment usage counter for hospital
    Returns True if successful
    """
    subscription = get_hospital_subscription(hospital_id)
    if not subscription:
        return False
    
    try:
        update_data = {}
        if entity_type == 'appointment':
            update_data['current_month_appointments'] = subscription.get('current_month_appointments', 0) + 1
        elif entity_type == 'operation':
            update_data['current_month_operations'] = subscription.get('current_month_operations', 0) + 1
        elif entity_type == 'pharma_appointment':
            update_data['current_month_pharma_appointments'] = subscription.get('current_month_pharma_appointments', 0) + 1
        
        supabase.table("hospital_subscriptions").update(update_data).eq(
            "id", subscription['id']
        ).execute()
        
        return True
    except Exception as e:
        print(f"Error incrementing usage: {e}")
        return False

def create_subscription(hospital_id: int, package_type: str, billing_period: str, payment_order_id: str) -> Optional[Dict[str, Any]]:
    """
    Create a new subscription for a hospital
    package_type: 'basic', 'standard', 'premium'
    billing_period: 'monthly', 'yearly'
    """
    if not supabase:
        return None
    
    # Define package limits
    package_limits = {
        'basic': {
            'appointments': 50,
            'operations': 5,
            'pharma_appointments': 25,
        },
        'standard': {
            'appointments': 200,
            'operations': 20,
            'pharma_appointments': 100,
        },
        'premium': {
            'appointments': 1000,
            'operations': 100,
            'pharma_appointments': 500,
        },
    }
    
    limits = package_limits.get(package_type, package_limits['basic'])
    
    # Calculate end date
    start_date = datetime.now().date()
    if billing_period == 'monthly':
        end_date = start_date + timedelta(days=30)
    else:  # yearly
        end_date = start_date + timedelta(days=365)
    
    subscription_data = {
        'hospital_id': hospital_id,
        'package_type': package_type,
        'billing_period': billing_period,
        'rate_limit_appointments': limits['appointments'],
        'rate_limit_operations': limits['operations'],
        'rate_limit_pharma_appointments': limits['pharma_appointments'],
        'current_month_appointments': 0,
        'current_month_operations': 0,
        'current_month_pharma_appointments': 0,
        'subscription_start_date': start_date.isoformat(),
        'subscription_end_date': end_date.isoformat(),
        'status': 'active',
        'payment_order_id': payment_order_id,
    }
    
    try:
        result = supabase.table("hospital_subscriptions").insert(subscription_data).execute()
        if result.data:
            return result.data[0]
        return None
    except Exception as e:
        print(f"Error creating subscription: {e}")
        return None

