# Testing Guide - Hospital Approval System

## ✅ Server Status

The server is running with in-memory storage. Test hospital has been added.

## 🌐 Web Admin Panel Testing

### Step 1: Open Web Admin Panel
Open in your browser:
**http://127.0.0.1:8000/admin_panel.html**

### Step 2: Verify Hospital Appears
You should see:
- **Pending tab** shows: "Test Hospital for Approval"
- Hospital ID: 1766686485
- Email: info@uabiotech.in
- Mobile: 9039622812
- All other details (address, UPI IDs, etc.)

### Step 3: Approve Hospital
1. Click the **"✅ Approve Hospital"** button
2. Confirm the approval
3. Hospital should move to **Approved** tab
4. Success message should appear

## 📱 Mobile App Testing

### Step 1: Open Mobile App
1. Install the APK: `~/Desktop/anagha_hospital_app.apk`
2. Open the app

### Step 2: Login as Admin
1. Click **"Admin Login"** button
2. Enter credentials:
   - Username: `anagha`
   - Password: `Uabiotech*2309`
3. Click Login

### Step 3: View Pending Hospitals
1. Go to **"Pending"** tab
2. You should see all pending hospitals
3. Each hospital card shows:
   - Hospital ID
   - Name
   - Email
   - Mobile
   - Address (if provided)
   - UPI IDs (if provided)
   - WhatsApp status

### Step 4: Approve Hospital
1. Find the hospital you want to approve
2. Click **"Approve Hospital"** button
3. Confirm approval
4. Hospital moves to **Approved** tab
5. Confirmation email sent automatically

## 🔄 Full Flow Test

### Test Complete Registration → Approval Flow

1. **Register New Hospital** (in mobile app):
   - Fill all fields
   - Submit registration
   - Hospital saved to:
     - Server (for web page)
     - Local storage (for mobile app)

2. **Check Web Page**:
   - Open http://127.0.0.1:8000/admin_panel.html
   - Refresh the page
   - Hospital should appear in Pending tab

3. **Check Mobile App**:
   - Open Admin Panel
   - Go to Pending tab
   - Hospital should appear

4. **Approve from Web**:
   - Click Approve button
   - Hospital moves to Approved tab
   - Check mobile app - should also show as approved

5. **Approve from Mobile**:
   - Click Approve button
   - Hospital moves to Approved tab
   - Check web page - should also show as approved

## ✅ Verification Checklist

- [ ] Web page loads without errors
- [ ] Pending hospitals appear in web page
- [ ] Hospital details show correctly in web page
- [ ] Approve button works in web page
- [ ] Approved hospitals appear in web page
- [ ] Mobile app admin login works
- [ ] Pending hospitals appear in mobile app
- [ ] Hospital details show correctly in mobile app
- [ ] Approve button works in mobile app
- [ ] Approved hospitals appear in mobile app
- [ ] Confirmation email sent after approval

## 🐛 Troubleshooting

### Web Page Shows Empty
- Check server is running: `curl http://127.0.0.1:8000/health`
- Check pending hospitals: `curl http://127.0.0.1:8000/api/hospitals/pending`
- Refresh the web page

### Mobile App Shows Empty
- Check local storage is working
- Try registering a new hospital
- Check admin panel loads from local storage first

### Approval Not Working
- Check server logs: `tail -f server.log`
- Verify hospital ID matches
- Try refreshing after approval

## 📊 Current Test Data

- **Hospital ID**: 1766686485
- **Name**: Test Hospital for Approval
- **Email**: info@uabiotech.in
- **Mobile**: 9039622812
- **Status**: pending (ready for approval)

## 🎯 Next Steps

1. Register a real hospital through the mobile app
2. Check it appears in both web and mobile admin panels
3. Approve it from either interface
4. Verify confirmation email is sent

