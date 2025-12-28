# How to Start the Development Server

## ✅ Server Status

The development server is ready to start! Here's how to run it:

## 🚀 Quick Start

### Option 1: Using the server.py file (Recommended)

```bash
cd "/Users/rahulsharma/Desktop/mobile project"
python3 server.py
```

This will start the server on `http://127.0.0.1:8000`

### Option 2: Using uvicorn directly

```bash
cd "/Users/rahulsharma/Desktop/mobile project"
uvicorn server:app --reload --host 127.0.0.1 --port 8000
```

## 📍 Access URLs

Once the server is running, you can access:

- **Admin Panel**: http://127.0.0.1:8000/admin_panel.html
- **Admin Panel (short)**: http://127.0.0.1:8000/admin
- **Home**: http://127.0.0.1:8000/
- **API Documentation**: http://127.0.0.1:8000/docs
- **Health Check**: http://127.0.0.1:8000/health

## ⚠️ Port Conflict

If port 8000 is already in use, you can:

1. **Stop the existing server**:
   ```bash
   # Find the process
   lsof -ti:8000
   
   # Kill it
   kill $(lsof -ti:8000)
   ```

2. **Use a different port**:
   ```bash
   # Edit server.py and change port 8000 to 8001
   # Then run:
   uvicorn server:app --reload --host 127.0.0.1 --port 8001
   ```

## 🔧 Requirements

Make sure you have installed:
```bash
pip3 install fastapi uvicorn
```

## 📝 Next Steps

1. Start the server using one of the methods above
2. Open http://127.0.0.1:8000/admin_panel.html in your browser
3. The admin panel will connect to the API endpoints
4. You can approve hospitals from the web interface

## 🛑 Stopping the Server

Press `CTRL+C` in the terminal where the server is running.

## 📋 API Endpoints Available

- `GET /api/hospitals/pending` - Get pending hospitals
- `GET /api/hospitals/approved` - Get approved hospitals  
- `GET /api/hospitals` - Get all hospitals
- `PUT /api/hospitals/{id}/approve` - Approve a hospital
- `POST /api/hospitals/{id}/approve` - Approve a hospital (alternative)

## ⚡ Note

The current API endpoints return empty arrays as placeholders. You need to implement the actual database queries in `server.py` to connect to your database.

