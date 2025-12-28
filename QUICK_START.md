# Quick Start Guide - Merged Projects

## Overview

Both Mobile and Web projects now share the same Supabase database backend and are configured to run on different ports.

## Configuration

### Database
- **Database**: Supabase (shared between both projects)
- **Config File**: Both projects use `.env` file with:
  - `SUPABASE_URL`
  - `SUPABASE_KEY`
  - `JWT_SECRET` (shared)

### Ports
- **Mobile Project**: Port 8000
- **Web Project**: Port 3000

## Running the Projects

### 1. Mobile Project (Port 8000)

```bash
cd "mobile project"
python3 server.py
```

Or:
```bash
cd "mobile project"
uvicorn server:app --reload --host 127.0.0.1 --port 8000
```

Access:
- API: http://127.0.0.1:8000
- Docs: http://127.0.0.1:8000/docs
- Health: http://127.0.0.1:8000/health

### 2. Web Project (Port 3000)

```bash
cd "hospital project"
python3 main.py
```

Or:
```bash
cd "hospital project"
uvicorn main:app --reload --host 127.0.0.1 --port 3000
```

Access:
- Web Interface: http://127.0.0.1:3000
- API: http://127.0.0.1:3000
- Docs: http://127.0.0.1:3000/docs
- Health: http://127.0.0.1:3000/health

## Environment Setup

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

### 2. Environment Variables

Create a `.env` file in both project directories (or use one shared `.env`):

```env
# Supabase Configuration (REQUIRED - shared between projects)
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key

# JWT Configuration (shared)
JWT_SECRET=anagha-hospital-solutions-secret-key-2024

# Server Configuration
SERVER_HOST=127.0.0.1
# Mobile project uses port 8000 (default in config.py)
# Web project uses port 3000 (default in config.py)

# Razorpay (optional)
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Email Configuration (optional)
SMTP_HOST=mail.anaghasafar.com
SMTP_PORT=587
SMTP_USERNAME=info@anaghasafar.com
SMTP_PASSWORD=your_password
```

## Running Both Projects Simultaneously

You can run both projects at the same time on different ports:

**Terminal 1 - Mobile:**
```bash
cd "mobile project"
python3 server.py
```

**Terminal 2 - Web:**
```bash
cd "hospital project"
python3 main.py
```

Both will connect to the same Supabase database, so data is shared between mobile and web interfaces.

## What Was Changed

### ✅ Completed
1. **Database**: Web project now uses Supabase (same as mobile)
2. **Configuration**: Shared config structure between projects
3. **Authentication**: Both use same JWT and bcrypt approach
4. **Users Router**: Updated to use Supabase
5. **Main Application**: Updated to use Supabase and port 3000
6. **Payment Gateway**: Shared between projects

### ⚠️ Still Needs Migration
Some routers in the web project still use SQLAlchemy and need to be migrated to Supabase:
- `routers/hospitals.py`
- `routers/appointments.py`
- `routers/operations.py`
- `routers/payments.py`
- `routers/admin.py`
- `services/scheduler_service.py`

See `MERGE_SUMMARY.md` for detailed migration guide.

## API Endpoints

### Mobile Project (Port 8000)
- `/api/users/register`
- `/api/users/login`
- `/api/hospitals/register`
- `/api/hospitals/approved`
- `/api/appointments/book`
- `/api/operations/book`
- `/api/payments/create-order`
- `/api/cities/search`
- `/api/doctors/search`

### Web Project (Port 3000)
- Same endpoints as mobile (when fully migrated)
- Plus HTML template routes:
  - `/` - Home page
  - `/login` - Login page
  - `/dashboard` - User dashboard
  - `/doctor-dashboard` - Doctor dashboard
  - `/book-appointment` - Book appointment page
  - `/book-operation` - Book operation page

## Troubleshooting

### Port Already in Use
If port 8000 or 3000 is already in use:

```bash
# Find process using port
lsof -ti:8000
lsof -ti:3000

# Kill process
kill $(lsof -ti:8000)
kill $(lsof -ti:3000)
```

### Database Connection Issues
1. Verify `.env` file has correct `SUPABASE_URL` and `SUPABASE_KEY`
2. Check Supabase dashboard to ensure database is accessible
3. Test connection: Check `/health` endpoint on both servers

### Import Errors
Make sure all dependencies are installed:
```bash
pip3 install -r requirements.txt
```

## Notes

- Both projects now share the same database (Supabase)
- Data created from mobile interface is visible in web interface and vice versa
- Models in `models.py` are now reference-only (Supabase handles schema)
- The mobile project's `server.py` already has working Supabase endpoints
- The web project's routers need gradual migration (users router is done)

