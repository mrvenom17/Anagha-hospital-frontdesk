"""
Example FastAPI backend setup to serve the admin panel
Copy this code to your FastAPI backend and adjust as needed
"""

from fastapi import FastAPI
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Anagha Hospital Solutions API")

# Add CORS middleware to allow web admin panel to access API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve admin panel HTML file
@app.get("/admin_panel.html", response_class=HTMLResponse)
@app.get("/admin", response_class=HTMLResponse)
async def admin_panel():
    """Serve the web admin panel"""
    try:
        # Try current directory first
        with open("admin_panel.html", "r", encoding="utf-8") as f:
            return HTMLResponse(content=f.read())
    except FileNotFoundError:
        try:
            # Try static directory
            with open("static/admin_panel.html", "r", encoding="utf-8") as f:
                return HTMLResponse(content=f.read())
        except FileNotFoundError:
            return HTMLResponse(
                content="<h1>Admin Panel Not Found</h1><p>Please ensure admin_panel.html is in the project root or static directory.</p>",
                status_code=404
            )

# Example API endpoints (implement according to your database)
@app.get("/api/hospitals/pending")
async def get_pending_hospitals():
    """
    Get all pending hospitals
    Replace this with your actual database query
    """
    # TODO: Replace with your actual database query
    # Example:
    # from your_database import get_pending_hospitals
    # hospitals = await get_pending_hospitals()
    # return hospitals
    
    # For now, return empty list if not implemented
    return []

@app.get("/api/hospitals/approved")
async def get_approved_hospitals():
    """
    Get all approved hospitals
    Replace this with your actual database query
    """
    # TODO: Replace with your actual database query
    # Example:
    # from your_database import get_approved_hospitals
    # hospitals = await get_approved_hospitals()
    # return hospitals
    
    # For now, return empty list if not implemented
    return []

@app.get("/api/hospitals")
async def get_all_hospitals():
    """
    Get all hospitals (fallback endpoint)
    Replace this with your actual database query
    """
    # TODO: Replace with your actual database query
    # Example:
    # from your_database import get_all_hospitals
    # hospitals = await get_all_hospitals()
    # return hospitals
    
    # For now, return empty list if not implemented
    return []

@app.put("/api/hospitals/{hospital_id}/approve")
async def approve_hospital(hospital_id: int):
    """
    Approve a hospital
    This should:
    1. Update hospital status to 'approved' in database
    2. Send confirmation email to hospital
    """
    from fastapi import HTTPException
    
    # TODO: Replace with your actual database implementation
    # Example implementation:
    # 
    # from your_database import get_hospital, update_hospital
    # from your_email_service import send_confirmation_email
    # 
    # # 1. Get hospital from database
    # hospital = await get_hospital(hospital_id)
    # if not hospital:
    #     raise HTTPException(status_code=404, detail="Hospital not found")
    # 
    # # 2. Update hospital status
    # hospital.status = 'approved'
    # await update_hospital(hospital)
    # 
    # # 3. Send confirmation email
    # await send_confirmation_email(
    #     hospital_email=hospital.email,
    #     hospital_name=hospital.name,
    #     hospital_mobile=hospital.mobile
    # )
    # 
    # return {
    #     "status": "approved",
    #     "message": "Hospital approved successfully",
    #     "hospital_id": hospital_id
    # }
    
    # Temporary implementation that returns success
    # This allows the web panel to work even without full backend implementation
    # The mobile app will handle the actual approval via local storage
    return {
        "status": "approved",
        "message": "Hospital approved successfully",
        "hospital_id": hospital_id,
        "note": "This is a temporary response. Implement database update and email sending in your backend."
    }

# Run with: uvicorn backend_setup_example:app --reload --host 127.0.0.1 --port 8000

