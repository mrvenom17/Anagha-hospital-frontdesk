# Quick Setup Guide - Fix "Not Found" Error

## Problem
The web admin panel shows `{"detail":"Not Found"}` error.

## Solution

### Step 1: Add Admin Panel Route to Your Backend

Add this to your FastAPI `main.py`:

```python
from fastapi.responses import HTMLResponse

@app.get("/admin_panel.html", response_class=HTMLResponse)
@app.get("/admin", response_class=HTMLResponse)
async def admin_panel():
    """Serve the web admin panel"""
    try:
        with open("admin_panel.html", "r", encoding="utf-8") as f:
            return HTMLResponse(content=f.read())
    except FileNotFoundError:
        try:
            with open("static/admin_panel.html", "r", encoding="utf-8") as f:
                return HTMLResponse(content=f.read())
        except FileNotFoundError:
            return HTMLResponse(
                content="<h1>Admin Panel Not Found</h1><p>Please ensure admin_panel.html is in the project root.</p>",
                status_code=404
            )
```

### Step 2: Copy admin_panel.html

Copy `admin_panel.html` to your backend project root directory (same folder as your `main.py`).

### Step 3: Add API Endpoints (Minimum Required)

Add these endpoints to your backend:

```python
@app.get("/api/hospitals/pending")
async def get_pending_hospitals():
    # TODO: Replace with your database query
    return []

@app.get("/api/hospitals/approved")
async def get_approved_hospitals():
    # TODO: Replace with your database query
    return []

@app.get("/api/hospitals")
async def get_all_hospitals():
    # TODO: Replace with your database query
    return []

@app.put("/api/hospitals/{hospital_id}/approve")
async def approve_hospital(hospital_id: int):
    # TODO: Implement approval logic
    return {
        "status": "approved",
        "message": "Hospital approved successfully",
        "hospital_id": hospital_id
    }
```

### Step 4: Add CORS (If Needed)

If you see CORS errors, add:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Step 5: Test

1. Start your backend: `uvicorn main:app --reload --host 127.0.0.1 --port 8000`
2. Open browser: `http://127.0.0.1:8000/admin_panel.html`
3. The panel should load (even if no hospitals are shown yet)

## Updated Files

✅ `admin_panel.html` - Better error handling
✅ `backend_setup_example.py` - Complete example with error handling
✅ APK - Updated with improved error messages

## Notes

- The admin panel now shows helpful error messages if endpoints are not found
- It suggests using the mobile app admin panel as an alternative
- Empty lists are shown gracefully (no errors)
- The panel will work even if API endpoints return empty arrays

