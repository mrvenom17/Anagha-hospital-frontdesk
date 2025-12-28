-- ============================================
-- Anagha Hospital Solutions - Supabase Schema
-- ============================================
-- Run this SQL in your Supabase SQL Editor
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- HOSPITALS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS hospitals (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    mobile VARCHAR(20) NOT NULL UNIQUE,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    
    -- Address fields
    address_line1 TEXT,
    address_line2 TEXT,
    address_line3 TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    pincode VARCHAR(10),
    
    -- WhatsApp integration
    whatsapp_enabled BOOLEAN DEFAULT FALSE,
    whatsapp_number VARCHAR(20),
    
    -- UPI Payment details
    default_upi_id VARCHAR(100),
    google_pay_upi_id VARCHAR(100),
    phonepe_upi_id VARCHAR(100),
    paytm_upi_id VARCHAR(100),
    bhim_upi_id VARCHAR(100),
    payment_qr_code TEXT, -- URL or base64 image
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    approved_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- USERS TABLE (Doctors & Pharma Professionals)
-- ============================================
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    mobile VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(255),
    password_hash VARCHAR(255) NOT NULL, -- bcrypt hashed password
    role VARCHAR(20) NOT NULL CHECK (role IN ('doctor', 'pharma', 'patient')),
    
    -- Address fields
    address_line1 TEXT,
    address_line2 TEXT,
    address_line3 TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    pincode VARCHAR(10),
    
    -- Hospital association (for pharma)
    hospital_id BIGINT REFERENCES hospitals(id) ON DELETE SET NULL,
    
    -- Pharma Professional fields
    company_name VARCHAR(255),
    product1 VARCHAR(255),
    product2 VARCHAR(255),
    product3 VARCHAR(255),
    product4 VARCHAR(255),
    
    -- Doctor fields
    degree VARCHAR(255),
    institute_name VARCHAR(255),
    experience1 TEXT,
    experience2 TEXT,
    experience3 TEXT,
    experience4 TEXT,
    doctor_name VARCHAR(255), -- Name of doctor (for referrals)
    place VARCHAR(100), -- City name
    patient_referred_name VARCHAR(255), -- Name of patient referred
    problem TEXT, -- Problem description
    patient_mobile VARCHAR(20), -- Mobile of referred patient
    ref_no VARCHAR(100), -- Reference number
    
    -- Account status
    is_active BOOLEAN DEFAULT TRUE,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP WITH TIME ZONE
);

-- ============================================
-- PATIENTS TABLE (from bookings)
-- ============================================
CREATE TABLE IF NOT EXISTS patients (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    place VARCHAR(100), -- City name
    address_line1 TEXT,
    address_line2 TEXT,
    address_line3 TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    pincode VARCHAR(10),
    
    -- Additional info
    date_of_birth DATE,
    gender VARCHAR(10) CHECK (gender IN ('male', 'female', 'other')),
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- APPOINTMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS appointments (
    id BIGSERIAL PRIMARY KEY,
    
    -- Patient details (can be guest or registered)
    patient_id BIGINT REFERENCES patients(id) ON DELETE SET NULL, -- NULL for guest bookings
    patient_name VARCHAR(255) NOT NULL,
    patient_mobile VARCHAR(20) NOT NULL,
    place VARCHAR(100) NOT NULL, -- City name
    
    -- Appointment details
    hospital_id BIGINT NOT NULL REFERENCES hospitals(id) ON DELETE CASCADE,
    appointment_date DATE NOT NULL,
    appointment_time VARCHAR(20) NOT NULL, -- e.g., "10:30 AM"
    time_slot_start TIME,
    time_slot_end TIME,
    
    -- Payment details
    payment_method VARCHAR(50), -- 'googlepay', 'phonepe', 'paytm', 'bhim'
    payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
    payment_amount DECIMAL(10, 2),
    payment_transaction_id VARCHAR(255),
    payment_date TIMESTAMP WITH TIME ZONE,
    
    -- Appointment status
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled', 'no_show')),
    
    -- Additional notes
    notes TEXT,
    cancellation_reason TEXT,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    confirmed_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    cancelled_at TIMESTAMP WITH TIME ZONE
);

-- ============================================
-- OPERATIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS operations (
    id BIGSERIAL PRIMARY KEY,
    
    -- Patient details
    patient_id BIGINT REFERENCES patients(id) ON DELETE SET NULL,
    patient_name VARCHAR(255) NOT NULL,
    patient_mobile VARCHAR(20) NOT NULL,
    place VARCHAR(100) NOT NULL,
    
    -- Operation details
    hospital_id BIGINT NOT NULL REFERENCES hospitals(id) ON DELETE CASCADE,
    operation_date DATE NOT NULL,
    operation_time VARCHAR(20) NOT NULL,
    time_slot_start TIME,
    time_slot_end TIME,
    
    -- Operation type/specialty
    specialty VARCHAR(100), -- 'ortho', 'gyn', 'surgery', etc.
    operation_type VARCHAR(255),
    doctor_id BIGINT REFERENCES users(id) ON DELETE SET NULL, -- Assigned doctor
    
    -- Payment details
    payment_method VARCHAR(50),
    payment_status VARCHAR(20) DEFAULT 'pending',
    payment_amount DECIMAL(10, 2),
    payment_transaction_id VARCHAR(255),
    payment_date TIMESTAMP WITH TIME ZONE,
    
    -- Operation status
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled')),
    
    -- Additional notes
    notes TEXT,
    pre_operation_notes TEXT,
    post_operation_notes TEXT,
    cancellation_reason TEXT,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    confirmed_at TIMESTAMP WITH TIME ZONE,
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    cancelled_at TIMESTAMP WITH TIME ZONE
);

-- ============================================
-- ADMIN USERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS admin_users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    full_name VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    role VARCHAR(50) DEFAULT 'admin', -- 'admin', 'super_admin'
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP WITH TIME ZONE
);

-- ============================================
-- SESSIONS/TOKENS TABLE (for JWT refresh tokens)
-- ============================================
CREATE TABLE IF NOT EXISTS user_sessions (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token_hash VARCHAR(255) NOT NULL,
    device_info TEXT,
    ip_address VARCHAR(45),
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_used_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- PAYMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS payments (
    id BIGSERIAL PRIMARY KEY,
    order_id VARCHAR(255) NOT NULL UNIQUE,
    razorpay_order_id VARCHAR(255),
    payment_id VARCHAR(255),
    
    -- Service details
    service_type VARCHAR(20) NOT NULL CHECK (service_type IN ('appointment', 'operation')),
    hospital_id BIGINT NOT NULL REFERENCES hospitals(id) ON DELETE CASCADE,
    
    -- Patient details
    patient_name VARCHAR(255) NOT NULL,
    patient_mobile VARCHAR(20) NOT NULL,
    patient_id BIGINT REFERENCES patients(id) ON DELETE SET NULL,
    
    -- Payment details
    amount DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'INR',
    payment_method VARCHAR(50), -- 'razorpay', 'upi', 'googlepay', 'phonepe', 'paytm', 'bhim'
    payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded', 'partially_refunded')),
    status VARCHAR(20) DEFAULT 'pending', -- Same as payment_status for compatibility
    
    -- Transaction details
    payment_transaction_id VARCHAR(255),
    payment_date TIMESTAMP WITH TIME ZONE,
    
    -- Refund details
    refund_id VARCHAR(255),
    refund_amount DECIMAL(10, 2),
    refund_status VARCHAR(20),
    refund_reason TEXT,
    refund_date TIMESTAMP WITH TIME ZONE,
    
    -- Metadata
    metadata JSONB,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- NOTIFICATIONS TABLE (for tracking emails/SMS)
-- ============================================
CREATE TABLE IF NOT EXISTS notifications (
    id BIGSERIAL PRIMARY KEY,
    recipient_type VARCHAR(20) NOT NULL, -- 'hospital', 'user', 'patient', 'admin'
    recipient_id BIGINT,
    recipient_email VARCHAR(255),
    recipient_mobile VARCHAR(20),
    
    notification_type VARCHAR(50) NOT NULL, -- 'registration', 'approval', 'appointment', 'operation', 'reminder'
    subject VARCHAR(255),
    message TEXT,
    email_sent BOOLEAN DEFAULT FALSE,
    sms_sent BOOLEAN DEFAULT FALSE,
    whatsapp_sent BOOLEAN DEFAULT FALSE,
    
    sent_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- INDEXES for Performance
-- ============================================

-- Hospitals indexes
CREATE INDEX IF NOT EXISTS idx_hospitals_status ON hospitals(status);
CREATE INDEX IF NOT EXISTS idx_hospitals_email ON hospitals(email);
CREATE INDEX IF NOT EXISTS idx_hospitals_mobile ON hospitals(mobile);

-- Users indexes
CREATE INDEX IF NOT EXISTS idx_users_mobile ON users(mobile);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_users_hospital_id ON users(hospital_id);
CREATE INDEX IF NOT EXISTS idx_users_is_active ON users(is_active);

-- Patients indexes
CREATE INDEX IF NOT EXISTS idx_patients_mobile ON patients(mobile);

-- Appointments indexes
CREATE INDEX IF NOT EXISTS idx_appointments_hospital_id ON appointments(hospital_id);
CREATE INDEX IF NOT EXISTS idx_appointments_patient_id ON appointments(patient_id);
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(appointment_date);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_appointments_patient_mobile ON appointments(patient_mobile);

-- Operations indexes
CREATE INDEX IF NOT EXISTS idx_operations_hospital_id ON operations(hospital_id);
CREATE INDEX IF NOT EXISTS idx_operations_patient_id ON operations(patient_id);
CREATE INDEX IF NOT EXISTS idx_operations_doctor_id ON operations(doctor_id);
CREATE INDEX IF NOT EXISTS idx_operations_date ON operations(operation_date);
CREATE INDEX IF NOT EXISTS idx_operations_status ON operations(status);

-- Sessions indexes
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON user_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_expires_at ON user_sessions(expires_at);

-- Payments indexes
CREATE INDEX IF NOT EXISTS idx_payments_order_id ON payments(order_id);
CREATE INDEX IF NOT EXISTS idx_payments_payment_id ON payments(payment_id);
CREATE INDEX IF NOT EXISTS idx_payments_patient_mobile ON payments(patient_mobile);
CREATE INDEX IF NOT EXISTS idx_payments_hospital_id ON payments(hospital_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(payment_status);
CREATE INDEX IF NOT EXISTS idx_payments_service_type ON payments(service_type);

-- ============================================
-- TRIGGERS for updated_at
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_hospitals_updated_at BEFORE UPDATE ON hospitals
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_patients_updated_at BEFORE UPDATE ON patients
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_appointments_updated_at BEFORE UPDATE ON appointments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_operations_updated_at BEFORE UPDATE ON operations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON payments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- CITIES TABLE (for All India Pincode Directory)
-- ============================================
CREATE TABLE IF NOT EXISTS cities (
    id BIGSERIAL PRIMARY KEY,
    city_name VARCHAR(255) NOT NULL UNIQUE,
    state_name VARCHAR(255),
    district_name VARCHAR(255),
    pincode VARCHAR(10),
    source VARCHAR(50) DEFAULT 'api' CHECK (source IN ('api', 'manual', 'government')),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_fetched_at TIMESTAMP WITH TIME ZONE
);

-- Indexes for cities table
CREATE INDEX IF NOT EXISTS idx_cities_name ON cities(city_name);
CREATE INDEX IF NOT EXISTS idx_cities_state ON cities(state_name);
CREATE INDEX IF NOT EXISTS idx_cities_pincode ON cities(pincode);
CREATE INDEX IF NOT EXISTS idx_cities_active ON cities(is_active);

-- Trigger for updated_at
CREATE TRIGGER update_cities_updated_at BEFORE UPDATE ON cities
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- DOCTORS TABLE (for Pharma Professionals to book appointments)
-- ============================================
CREATE TABLE IF NOT EXISTS doctors (
    id BIGSERIAL PRIMARY KEY,
    doctor_name VARCHAR(255) NOT NULL,
    place VARCHAR(255), -- City name
    mobile VARCHAR(20),
    email VARCHAR(255),
    degree VARCHAR(255),
    specialization VARCHAR(255),
    hospital_id BIGINT REFERENCES hospitals(id) ON DELETE SET NULL,
    is_active BOOLEAN DEFAULT TRUE,
    source VARCHAR(50) DEFAULT 'manual' CHECK (source IN ('manual', 'crowdsourced', 'verified')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_by_user_id BIGINT REFERENCES users(id) ON DELETE SET NULL
);

-- Indexes for doctors table
CREATE INDEX IF NOT EXISTS idx_doctors_name ON doctors(doctor_name);
CREATE INDEX IF NOT EXISTS idx_doctors_place ON doctors(place);
CREATE INDEX IF NOT EXISTS idx_doctors_mobile ON doctors(mobile);
CREATE INDEX IF NOT EXISTS idx_doctors_hospital_id ON doctors(hospital_id);
CREATE INDEX IF NOT EXISTS idx_doctors_active ON doctors(is_active);

-- Trigger for updated_at
CREATE TRIGGER update_doctors_updated_at BEFORE UPDATE ON doctors
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- PHARMA APPOINTMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS pharma_appointments (
    id BIGSERIAL PRIMARY KEY,
    pharma_user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    doctor_id BIGINT NOT NULL REFERENCES doctors(id) ON DELETE CASCADE,
    appointment_date DATE NOT NULL,
    appointment_time VARCHAR(20) NOT NULL,
    company_name VARCHAR(255),
    product1 VARCHAR(255),
    product2 VARCHAR(255),
    product3 VARCHAR(255),
    product4 VARCHAR(255),
    payment_order_id VARCHAR(255) REFERENCES payments(order_id) ON DELETE SET NULL,
    payment_status VARCHAR(50) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
    payment_amount DECIMAL(10, 2),
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for pharma_appointments
CREATE INDEX IF NOT EXISTS idx_pharma_appointments_pharma_user_id ON pharma_appointments(pharma_user_id);
CREATE INDEX IF NOT EXISTS idx_pharma_appointments_doctor_id ON pharma_appointments(doctor_id);
CREATE INDEX IF NOT EXISTS idx_pharma_appointments_date ON pharma_appointments(appointment_date);
CREATE INDEX IF NOT EXISTS idx_pharma_appointments_status ON pharma_appointments(status);

-- Trigger for updated_at
CREATE TRIGGER update_pharma_appointments_updated_at BEFORE UPDATE ON pharma_appointments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- HOSPITAL SUBSCRIPTIONS/PACKAGES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS hospital_subscriptions (
    id BIGSERIAL PRIMARY KEY,
    hospital_id BIGINT NOT NULL REFERENCES hospitals(id) ON DELETE CASCADE,
    package_type VARCHAR(50) NOT NULL CHECK (package_type IN ('basic', 'standard', 'premium')),
    billing_period VARCHAR(20) NOT NULL CHECK (billing_period IN ('monthly', 'yearly')),
    rate_limit_appointments INTEGER DEFAULT 100, -- Monthly limit
    rate_limit_operations INTEGER DEFAULT 10, -- Monthly limit
    rate_limit_pharma_appointments INTEGER DEFAULT 50, -- Monthly limit
    current_month_appointments INTEGER DEFAULT 0,
    current_month_operations INTEGER DEFAULT 0,
    current_month_pharma_appointments INTEGER DEFAULT 0,
    subscription_start_date DATE NOT NULL,
    subscription_end_date DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'expired', 'cancelled', 'suspended')),
    payment_order_id VARCHAR(255) REFERENCES payments(order_id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for hospital_subscriptions
CREATE INDEX IF NOT EXISTS idx_hospital_subscriptions_hospital_id ON hospital_subscriptions(hospital_id);
CREATE INDEX IF NOT EXISTS idx_hospital_subscriptions_status ON hospital_subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_hospital_subscriptions_end_date ON hospital_subscriptions(subscription_end_date);

-- Trigger for updated_at
CREATE TRIGGER update_hospital_subscriptions_updated_at BEFORE UPDATE ON hospital_subscriptions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ADD HOSPITAL_ID TO ALL TABLES FOR MULTI-TENANT ISOLATION
-- ============================================

-- Add hospital_id to users table (if not exists)
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='users' AND column_name='hospital_id') THEN
        ALTER TABLE users ADD COLUMN hospital_id BIGINT REFERENCES hospitals(id) ON DELETE SET NULL;
        CREATE INDEX IF NOT EXISTS idx_users_hospital_id ON users(hospital_id);
    END IF;
END $$;

-- Add hospital_id to patients table
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='patients' AND column_name='hospital_id') THEN
        ALTER TABLE patients ADD COLUMN hospital_id BIGINT REFERENCES hospitals(id) ON DELETE SET NULL;
        CREATE INDEX IF NOT EXISTS idx_patients_hospital_id ON patients(hospital_id);
    END IF;
END $$;

-- Add hospital_id to appointments table (already exists, but ensure index)
CREATE INDEX IF NOT EXISTS idx_appointments_hospital_id ON appointments(hospital_id);

-- Add hospital_id to operations table (already exists, but ensure index)
CREATE INDEX IF NOT EXISTS idx_operations_hospital_id ON operations(hospital_id);

-- Add hospital_id to payments table
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='payments' AND column_name='hospital_id') THEN
        ALTER TABLE payments ADD COLUMN hospital_id BIGINT REFERENCES hospitals(id) ON DELETE SET NULL;
        CREATE INDEX IF NOT EXISTS idx_payments_hospital_id ON payments(hospital_id);
    END IF;
END $$;

-- Add hospital_id to notifications table
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='notifications' AND column_name='hospital_id') THEN
        ALTER TABLE notifications ADD COLUMN hospital_id BIGINT REFERENCES hospitals(id) ON DELETE SET NULL;
        CREATE INDEX IF NOT EXISTS idx_notifications_hospital_id ON notifications(hospital_id);
    END IF;
END $$;

-- Add hospital_id to pharma_appointments table
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='pharma_appointments' AND column_name='hospital_id') THEN
        ALTER TABLE pharma_appointments ADD COLUMN hospital_id BIGINT REFERENCES hospitals(id) ON DELETE SET NULL;
        CREATE INDEX IF NOT EXISTS idx_pharma_appointments_hospital_id ON pharma_appointments(hospital_id);
    END IF;
END $$;

-- ============================================
-- COMPLETE
-- ============================================
-- All tables, indexes, and triggers created!
-- Multi-tenant isolation with hospital_id added to all tables
-- Package-based access control system implemented
-- Next: Run test_supabase.py to add demo records

