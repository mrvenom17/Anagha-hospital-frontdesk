# Hospital Booking System

A comprehensive hospital booking system with **Mobile (Flutter)** and **Web (FastAPI)** interfaces, sharing the same **Supabase** database backend.

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Running the Servers](#running-the-servers)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Development](#development)

## 🎯 Overview

This project consists of:

1. **Mobile Application** (Flutter/Android) - Patient-facing mobile app
2. **Web Application** (FastAPI/HTML) - Web interface for both patients and administrators
3. **Shared Backend** - Both applications use the same Supabase database

Both projects run on **different ports** but share the same database, ensuring data synchronization between mobile and web interfaces.

## 🏗️ Architecture

```
Hospital/
├── mobile project/          # Flutter mobile app (Port 8000)
│   ├── lib/                 # Dart source code
│   ├── android/             # Android native code
│   └── server.py            # FastAPI server for mobile API
│
├── hospital project/        # Web application (Port 3000)
│   ├── routers/             # API route handlers
│   ├── templates/           # HTML templates
│   ├── static/              # CSS, JS, images
│   ├── services/            # Business logic services
│   └── main.py              # FastAPI web server
│
└── .env                     # Shared configuration (Supabase credentials)
```

### Database

- **Database**: Supabase (PostgreSQL)
- **Connection**: Both projects connect to the same Supabase instance
- **Schema**: Managed by Supabase (see `supabase_schema.sql` files)

## ✨ Features

### User Features
- 👤 User Registration (Patient, Pharma Professional, Doctor)
- 🔐 Authentication with JWT tokens
- 🏥 Hospital Registration & Approval System
- 📅 Book Appointments
- 🏥 Book Operations
- 💳 Payment Integration (Razorpay/UPI)
- 📱 WhatsApp Notifications
- 📊 Dashboard for users and doctors
- 🔍 City & Doctor Autocomplete

### Admin Features
- ✅ Hospital Approval System
- 💰 Pricing Management
- 📈 View Appointments & Operations
- 📝 WhatsApp Message Logs
- 📊 Admin Dashboard

## 🛠️ Tech Stack

### Backend
- **FastAPI** - Web framework
- **Supabase** - Database (PostgreSQL)
- **Python 3.7+**
- **JWT** - Authentication
- **bcrypt** - Password hashing

### Mobile
- **Flutter** - Mobile framework
- **Dart** - Programming language
- **Android** - Target platform

### Web
- **HTML/CSS/JavaScript** - Frontend
- **Jinja2** - Template engine

### Payment
- **Razorpay** - Payment gateway
- **UPI** - Payment method

### Communication
- **WhatsApp Web** (Selenium) - Notifications
- **Email** (SMTP) - Notifications

## 📁 Project Structure

```
Hospital/
├── .env                          # Environment variables (Supabase, JWT, etc.)
├── README.md                     # This file
├── run_servers.py                # Server runner script (runs both servers)
├── start_servers.sh              # Bash wrapper for server runner
│
├── mobile project/               # Mobile Application
│   ├── lib/                      # Flutter/Dart source
│   │   ├── main.dart            # App entry point
│   │   ├── models/              # Data models
│   │   ├── screens/             # UI screens
│   │   ├── services/            # API services
│   │   └── widgets/             # Reusable widgets
│   ├── android/                  # Android native code
│   ├── assets/                   # Images, fonts, icons
│   ├── server.py                 # FastAPI server (Port 8000)
│   ├── config.py                 # Server configuration
│   ├── payment_gateway.py        # Payment integration
│   ├── requirements.txt          # Python dependencies
│   └── pubspec.yaml              # Flutter dependencies
│
└── hospital project/             # Web Application
    ├── main.py                   # FastAPI server (Port 3000)
    ├── config.py                 # Server configuration
    ├── database.py               # Supabase connection
    ├── auth.py                   # Authentication logic
    ├── models.py                 # Data models (enums)
    ├── schemas.py                # Pydantic schemas
    ├── payment_gateway.py        # Payment integration
    ├── routers/                  # API routes
    │   ├── users.py              # User management
    │   ├── hospitals.py          # Hospital management
    │   ├── appointments.py       # Appointment booking
    │   ├── operations.py         # Operation booking
    │   ├── payments.py           # Payment processing
    │   ├── admin.py              # Admin functions
    │   └── whatsapp_logs.py      # WhatsApp logs
    ├── services/                 # Business logic
    │   ├── csv_service.py        # CSV export
    │   ├── whatsapp_service.py   # WhatsApp integration
    │   ├── scheduler_service.py  # Background tasks
    │   └── message_templates.py  # Message templates
    ├── templates/                # HTML templates
    │   ├── base.html
    │   ├── login.html
    │   ├── dashboard.html
    │   ├── doctor_dashboard.html
    │   └── ...
    ├── static/                   # Static files
    │   ├── css/
    │   ├── js/
    │   └── images/
    ├── requirements.txt          # Python dependencies
    └── supabase_schema.sql       # Database schema
```

## 🚀 Quick Start

### Prerequisites

- Python 3.7 or higher
- Flutter SDK (for mobile app development)
- Supabase account and project
- `.env` file with Supabase credentials

### 1. Install Dependencies

**Mobile Project:**
```bash
cd "mobile project"
pip3 install -r requirements.txt
```

**Web Project:**
```bash
cd "hospital project"
pip3 install -r requirements.txt
```

**Flutter Dependencies (Mobile App):**
```bash
cd "mobile project"
flutter pub get
```

### 2. Configure Environment

Create a `.env` file in the `Hospital/` folder:

```env
# Supabase Configuration (REQUIRED)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_supabase_anon_key

# JWT Configuration (shared)
JWT_SECRET=your-secret-key-change-this-in-production

# Server Configuration
SERVER_HOST=127.0.0.1
# Mobile uses port 8000 (default)
# Web uses port 3000 (default)

# Razorpay (optional, for payments)
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Email Configuration (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your_email@gmail.com
SMTP_PASSWORD=your_password
SMTP_FROM_EMAIL=your_email@gmail.com

# Admin Configuration (optional)
ADMIN_EMAIL=admin@example.com
ADMIN_WHATSAPP=+1234567890
```

### 3. Run Both Servers

**Option 1: Using the Server Runner (Recommended)**
```bash
cd /Users/rahulsharma/Desktop/Hospital
python3 run_servers.py
```

This will:
- ✅ Check configuration
- ✅ Test Supabase connection
- ✅ Start Mobile server on port 8000
- ✅ Start Web server on port 3000
- ✅ Display real-time logs

**Option 2: Run Separately**

**Mobile Server (Port 8000):**
```bash
cd "mobile project"
python3 server.py
```

**Web Server (Port 3000):**
```bash
cd "hospital project"
python3 main.py
```

### 4. Access the Applications

#### Mobile API
- **API**: http://127.0.0.1:8000
- **API Docs**: http://127.0.0.1:8000/docs
- **Health Check**: http://127.0.0.1:8000/health
- **Admin Panel**: http://127.0.0.1:8000/admin_panel.html

#### Web Application
- **Web UI**: http://127.0.0.1:3000
- **API**: http://127.0.0.1:3000
- **API Docs**: http://127.0.0.1:3000/docs
- **Health Check**: http://127.0.0.1:3000/health

## ⚙️ Configuration

### Port Configuration

- **Mobile Project**: Port 8000 (configured in `mobile project/config.py`)
- **Web Project**: Port 3000 (configured in `hospital project/config.py`)

To change ports, modify the `SERVER_PORT` in respective `config.py` files or set `WEB_PORT` environment variable for web project.

### Database Configuration

Both projects automatically load `.env` from:
1. Their own directory
2. Parent directory (`Hospital/` folder) - **Recommended location**

The `.env` file should contain:
- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_KEY` - Your Supabase anon/public key
- `JWT_SECRET` - Secret key for JWT tokens (shared between projects)

## 📡 API Documentation

### Authentication Endpoints

**POST** `/api/users/register`
- Register a new user (patient, pharma, or doctor)
- Request body: `{ "name", "mobile", "password", "role", ... }`
- Returns: `{ "access_token", "user", ... }`

**POST** `/api/users/login`
- Login with mobile and password
- Request body: `{ "mobile", "password" }`
- Returns: `{ "access_token", "user", ... }`

**GET** `/api/users/me`
- Get current user information
- Requires: `Authorization: Bearer {token}`
- Returns: User object

### Hospital Endpoints

**POST** `/api/hospitals/register`
- Register a new hospital (requires payment)
- Request body: Hospital details
- Returns: Hospital object

**GET** `/api/hospitals/approved`
- Get all approved hospitals
- Returns: Array of hospitals

**PUT** `/api/hospitals/{id}/approve`
- Approve a hospital (admin only)
- Returns: Updated hospital

### Appointment Endpoints

**POST** `/api/appointments/book`
- Book an appointment
- Requires: Authentication
- Request body: `{ "doctor_id", "date", "time_slot" }`
- Returns: Appointment object

**GET** `/api/appointments/my-appointments`
- Get current user's appointments
- Requires: Authentication
- Returns: Array of appointments

### Operation Endpoints

**POST** `/api/operations/book`
- Book an operation
- Requires: Authentication
- Request body: `{ "specialty", "date", "time", ... }`
- Returns: Operation object

**GET** `/api/operations/my-operations`
- Get current user's operations
- Requires: Authentication
- Returns: Array of operations

### Payment Endpoints

**POST** `/api/payments/create-order`
- Create a payment order
- Request body: `{ "type", "amount", "hospital_id", ... }`
- Returns: Payment order details

**POST** `/api/payments/verify`
- Verify payment signature
- Request body: `{ "order_id", "payment_id", "signature" }`
- Returns: Verification status

### City & Doctor Endpoints

**GET** `/api/cities/search?q={query}`
- Search cities with autocomplete
- Returns: Array of matching cities

**GET** `/api/doctors/search?q={query}`
- Search doctors
- Returns: Array of matching doctors

**Full API Documentation**: Visit `/docs` endpoint on either server for interactive Swagger UI documentation.

## 🗄️ Database Schema

The database schema is managed by Supabase. Key tables:

- **hospitals** - Hospital information
- **users** - Users (patients, pharma professionals, doctors)
- **appointments** - Appointment bookings
- **operations** - Operation bookings
- **payments** - Payment transactions
- **cities** - City data for autocomplete
- **doctors** - Doctor information
- **whatsapp_logs** - WhatsApp message logs

See `supabase_schema.sql` files for complete schema definitions.

## 💻 Development

### Running in Development Mode

**Mobile Server (with auto-reload):**
```bash
cd "mobile project"
uvicorn server:app --reload --host 127.0.0.1 --port 8000
```

**Web Server (with auto-reload):**
```bash
cd "hospital project"
uvicorn main:app --reload --host 127.0.0.1 --port 3000
```

### Building Mobile App

**Build APK:**
```bash
cd "mobile project"
flutter build apk --release
```

**Build App Bundle (for Play Store):**
```bash
cd "mobile project"
flutter build appbundle --release
```

### Testing

**Check Configuration:**
```bash
python3 run_servers.py --check
```

**Test Supabase Connection:**
```bash
cd "mobile project"
python3 test_supabase.py
```

### Troubleshooting

**Port Already in Use:**
```bash
# Find process using port
lsof -ti:8000    # Mobile server
lsof -ti:3000    # Web server

# Kill process
kill $(lsof -ti:8000)
kill $(lsof -ti:3000)
```

**Supabase Connection Issues:**
1. Verify `.env` file exists in `Hospital/` folder
2. Check `SUPABASE_URL` and `SUPABASE_KEY` are correct
3. Verify Supabase project is active
4. Check internet connection

**Authentication Issues:**
- Ensure JWT_SECRET is the same in both projects
- Check token is stored in localStorage (for web)
- Verify token is sent in Authorization header

## 🔐 Security Notes

- **JWT Secret**: Change the default JWT_SECRET in production
- **Database**: Use Supabase Row Level Security (RLS) policies
- **CORS**: Configure allowed origins in production (currently set to "*")
- **Passwords**: All passwords are hashed using bcrypt
- **Tokens**: JWT tokens expire after 24 hours (configurable)

## 📝 Notes

- Both projects share the same Supabase database
- Data created from mobile interface is immediately visible in web interface and vice versa
- Models in `models.py` are reference-only (Supabase handles schema)
- Some routers still need full Supabase migration (users router is complete)
- Web project uses client-side authentication (tokens in localStorage)
- Mobile project uses standard JWT authentication

## 📄 License

[Add your license information here]

## 👥 Contributors

[Add contributor information here]

---

**Last Updated**: December 2024

