# Anagha Hospital - Mobile App Setup Guide

## 📱 App Information

- **App Name**: Anagha Hospital
- **Package Name**: com.anaghahospital.app
- **Platform**: Android (Flutter)
- **Target**: Google Play Store

## 🚀 Setup Instructions

### 1. Install Flutter

```bash
# Download Flutter from: https://flutter.dev/docs/get-started/install
# Extract and add to PATH
export PATH="$PATH:`pwd`/flutter/bin"
```

### 2. Install Dependencies

```bash
cd "/Users/rahulsharma/Desktop/mobile project"
flutter pub get
```

### 3. Update API Base URL

Edit `lib/services/api_service.dart`:
```dart
static const String baseUrl = 'YOUR_SERVER_URL'; // Change this to your production server
```

### 4. Run the App

```bash
flutter run
```

### 5. Build for Release

#### Build APK (for testing)
```bash
flutter build apk --release
```

#### Build App Bundle (for Google Play Store)
```bash
flutter build appbundle --release
```

The app bundle will be at: `build/app/outputs/bundle/release/app-release.aab`

## 📦 Google Play Store Deployment

### Requirements Met:

✅ **Code Obfuscation**: Enabled in `android/app/build.gradle`
- `minifyEnabled true`
- `shrinkResources true`
- ProGuard rules configured

✅ **App Name**: "Anagha Hospital" (configured in AndroidManifest.xml)

✅ **Package Name**: `com.anaghahospital.app`

✅ **No Code Visible**: Code is obfuscated and minified for release builds

### Steps to Upload:

1. **Build Release Bundle**:
   ```bash
   flutter build appbundle --release
   ```

2. **Create Google Play Console Account**:
   - Go to https://play.google.com/console
   - Create developer account ($25 one-time fee)

3. **Create New App**:
   - App name: "Anagha Hospital"
   - Default language: English
   - App type: App

4. **Upload App Bundle**:
   - Upload `app-release.aab` file
   - Fill in store listing details
   - Add screenshots and description
   - Set pricing (Free/Paid)

5. **Submit for Review**

## 📁 Project Structure

```
mobile project/
├── android/              # Android native configuration
│   ├── app/
│   │   ├── build.gradle  # Build config with obfuscation
│   │   └── proguard-rules.pro  # Obfuscation rules
│   └── build.gradle
├── lib/                  # Flutter/Dart source code
│   ├── main.dart
│   ├── models/           # Data models
│   ├── services/         # API & Auth services
│   ├── screens/          # UI screens
│   ├── widgets/          # Reusable widgets
│   └── utils/            # Utilities
├── assets/               # Images, fonts
├── pubspec.yaml          # Dependencies
└── README.md
```

## ✨ Features Implemented

- ✅ User Registration (Patient, Pharma, Doctor)
- ✅ Hospital Selection
- ✅ Login/Authentication
- ✅ Book Appointments
- ✅ Book Operations
- ✅ View Appointments
- ✅ View Operations
- ✅ Doctor Dashboard
- ✅ Mark Appointments as Visited
- ✅ Profile Management
- ✅ Logout

## 🔒 Security Features

- ✅ Code obfuscation for release builds
- ✅ Secure token storage
- ✅ HTTPS API communication
- ✅ Input validation

## 📝 Notes

- This is a **separate project** from the website
- No code overlap with website project
- Ready for Google Play Store submission
- Code is obfuscated in release builds (no code visible)



