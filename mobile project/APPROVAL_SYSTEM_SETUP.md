# Hospital Approval System Setup Guide

## Overview
The hospital approval system allows administrators to approve hospital registrations via email and automatically sends confirmation emails to approved hospitals.

## Components

### 1. Email with Approval Link
When a hospital registers, an email is sent to `info@uabiotech.in` with:
- All hospital registration details
- An **APPROVE HOSPITAL** button/link
- Hospital ID for reference

### 2. Approval Web Page
A web page (`approve_hospital.html`) is provided that:
- Displays hospital details
- Has an "APPROVE HOSPITAL" button
- Calls the API to approve the hospital
- Shows success/error messages

### 3. Backend API Requirements

Your backend needs to implement the following endpoint:

#### Endpoint: `PUT /api/hospitals/{hospital_id}/approve`

**Request:**
```json
{
  "status": "approved"
}
```

**Response (Success):**
```json
{
  "id": 1,
  "name": "Hospital Name",
  "email": "hospital@example.com",
  "status": "approved",
  "message": "Hospital approved successfully"
}
```

**What the backend should do:**
1. Update hospital status to "approved"
2. Call `EmailService.sendHospitalApprovalConfirmationEmail()` to send confirmation email
3. Return success response

### 4. Confirmation Email
After approval, a confirmation email is automatically sent to the hospital containing:
- Approval confirmation message
- Hospital details
- Next steps information

## Setup Instructions

### Step 1: Host the Approval Web Page
1. Upload `approve_hospital.html` to your web server (e.g., `www.anaghasafar.com`)
2. Update the `API_BASE_URL` in the HTML file to point to your API server
3. Ensure the page is accessible at: `https://www.anaghasafar.com/approve-hospital.html`

### Step 2: Update Email Service Configuration
In `lib/services/email_service.dart`, update:
```dart
static const String approvalWebUrl = 'https://www.anaghasafar.com/approve-hospital.html';
static const String apiBaseUrl = 'http://your-api-server.com:8000';
```

### Step 3: Implement Backend Approval Endpoint
Create an endpoint that:
1. Updates hospital status to "approved"
2. Sends confirmation email using the email service
3. Returns success response

**Example Python/FastAPI implementation:**
```python
@app.put("/api/hospitals/{hospital_id}/approve")
async def approve_hospital(hospital_id: int):
    # Update hospital status
    hospital = update_hospital_status(hospital_id, "approved")
    
    # Send confirmation email
    send_confirmation_email(
        hospital_name=hospital.name,
        hospital_email=hospital.email,
        hospital_mobile=hospital.mobile
    )
    
    return {"status": "approved", "message": "Hospital approved successfully"}
```

### Step 4: Update Hospital List in App
The app already fetches approved hospitals from `/api/hospitals/approved`. Ensure your backend:
- Returns only hospitals with status "approved"
- Updates the list when a hospital is approved

## Email Configuration

### SMTP Settings (Already Configured)
- **Host**: mail.anaghasafar.com
- **Port**: 587 (TLS) or 465 (SSL) or 25 (fallback)
- **Username**: info@anaghasafar.com
- **Password**: Uabiotech*2309
- **From**: info@anaghasafar.com
- **Admin Email**: info@uabiotech.in

## Testing

1. **Register a hospital** through the app
2. **Check email** at info@uabiotech.in (may be in junk folder)
3. **Click the approval link** in the email
4. **Approve the hospital** using the web page
5. **Verify confirmation email** is sent to the hospital
6. **Check app** - hospital should appear in the approved hospitals list

## Troubleshooting

### Email not received
- Check junk/spam folder
- Verify SMTP settings
- Check email server logs

### Approval link not working
- Verify web page is hosted and accessible
- Check API endpoint is implemented
- Verify hospital ID is correct

### Confirmation email not sent
- Ensure backend calls email service after approval
- Check SMTP configuration
- Verify hospital email is valid

## Notes

- The approval link includes the hospital ID as a URL parameter
- The web page can be customized to match your branding
- Multiple SMTP ports are tried automatically for reliability
- The system falls back to manual notification if email fails

