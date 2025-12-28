# Web Admin Panel Setup Instructions

## Overview
The web admin panel allows you to approve hospitals directly from a web browser. It connects to your backend API running on `http://127.0.0.1:8000/`.

## Files Created
- `admin_panel.html` - The web admin panel interface

## Setup Instructions

### Option 1: Serve as Static File (FastAPI/Flask)

#### For FastAPI:
1. Place `admin_panel.html` in your static files directory (e.g., `static/` folder)
2. Add this route to your FastAPI app:

```python
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

# Serve static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Serve admin panel
@app.get("/admin_panel.html")
async def admin_panel():
    return FileResponse("admin_panel.html")

# Or serve from static directory
@app.get("/admin")
async def admin_panel():
    return FileResponse("static/admin_panel.html")
```

#### For Flask:
1. Place `admin_panel.html` in your `templates/` or `static/` folder
2. Add this route:

```python
from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/admin_panel.html')
def admin_panel():
    return send_from_directory('.', 'admin_panel.html')
```

### Option 2: Serve as Static HTML File

1. Copy `admin_panel.html` to your web server's public directory
2. Access it at: `http://127.0.0.1:8000/admin_panel.html`

### Option 3: Add to Existing Backend Routes

If you're using FastAPI, add this to your main.py:

```python
from fastapi.responses import HTMLResponse

@app.get("/admin_panel.html", response_class=HTMLResponse)
async def admin_panel():
    with open("admin_panel.html", "r") as f:
        return HTMLResponse(content=f.read())
```

## Backend API Endpoints Required

The admin panel expects these API endpoints:

1. **GET `/api/hospitals/pending`** - Get all pending hospitals
   - Returns: `[{id, name, email, mobile, status, ...}]`

2. **GET `/api/hospitals/approved`** - Get all approved hospitals
   - Returns: `[{id, name, email, mobile, status, ...}]`

3. **GET `/api/hospitals`** - Get all hospitals (fallback)
   - Returns: `[{id, name, email, mobile, status, ...}]`

4. **PUT `/api/hospitals/{hospital_id}/approve`** - Approve a hospital
   - Request body: `{"status": "approved"}`
   - Should also trigger confirmation email to hospital

## Features

- ✅ View pending hospitals
- ✅ View approved hospitals
- ✅ Approve hospitals with one click
- ✅ Auto-refresh every 30 seconds
- ✅ Responsive design
- ✅ Error handling
- ✅ Success/error messages

## Accessing the Admin Panel

1. **From Email**: Click the "Open Web Admin Panel" button in the approval email
2. **Direct URL**: Navigate to `http://127.0.0.1:8000/admin_panel.html`
3. **From Browser**: Open the URL in any web browser

## Connecting with Mobile App

Both the web admin panel and mobile app admin panel:
- Use the same API endpoints
- Show the same data
- Can approve hospitals independently
- Send confirmation emails automatically

## Troubleshooting

### CORS Issues
If you see CORS errors, add CORS middleware to your backend:

**FastAPI:**
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

**Flask:**
```python
from flask_cors import CORS
CORS(app)
```

### API Not Responding
- Check that your backend is running on `http://127.0.0.1:8000`
- Verify API endpoints are implemented
- Check browser console for errors

### Admin Panel Not Loading
- Ensure the HTML file is in the correct location
- Check file permissions
- Verify the route is configured correctly

## Production Deployment

For production:
1. Update `API_BASE_URL` in `admin_panel.html` to your production API URL
2. Update `adminPanelUrl` in `lib/services/email_service.dart` to your production URL
3. Use HTTPS instead of HTTP
4. Add authentication/authorization to the admin panel
5. Restrict CORS to your domain only

## Notes

- The admin panel works independently of the mobile app
- Both can be used simultaneously
- Changes made in one will reflect in the other after refresh
- The mobile app also stores data locally for offline access

