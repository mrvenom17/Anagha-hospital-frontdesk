# 🚀 How to Run the Flutter App

## Quick Start

### For Mac/Linux:
```bash
cd /Users/rahulsharma/Desktop/Hospital
./start_app.sh
```

### For Windows:
```cmd
cd C:\Users\rahulsharma\Desktop\Hospital
start_app.bat
```

## What the Script Does

1. ✅ **Checks Backend Server** - Verifies if backend is running on port 3000
2. ✅ **Starts Backend** - If not running, starts it automatically
3. ✅ **Checks Flutter** - Verifies Flutter is installed
4. ✅ **Installs Dependencies** - Runs `flutter pub get`
5. ✅ **Checks for Devices** - Looks for connected devices/emulators
6. ✅ **Starts Emulator** - If no device found, automatically launches an Android emulator
7. ✅ **Runs the App** - Launches the Flutter app

## Manual Steps (if script doesn't work)

### 1. Start Backend Server
```bash
cd backend
python server_web.py
# Or: uvicorn server_web:app --host 127.0.0.1 --port 3000 --reload
```

### 2. Start Emulator (if needed)
```bash
# List available emulators
flutter emulators

# Launch an emulator
flutter emulators --launch <emulator-name>

# Or use Android Studio:
# Tools → Device Manager → Start emulator
```

### 3. Run Flutter App
```bash
cd frontend/app
flutter pub get
flutter run
```

## Troubleshooting

### Backend not starting?
- Check if port 3000 is already in use: `lsof -i :3000` (Mac) or `netstat -ano | findstr :3000` (Windows)
- Check backend logs: `tail -f /tmp/backend_server.log` (Mac) or check `%TEMP%\backend_server.log` (Windows)

### No emulator found?
- Open Android Studio → Tools → Device Manager
- Create a new virtual device (AVD)
- Or connect a physical Android device via USB

### Flutter not found?
- Install Flutter: https://flutter.dev/docs/get-started/install
- Add Flutter to PATH
- Run `flutter doctor` to verify installation

### App can't connect to backend?
- Ensure backend is running on `http://127.0.0.1:3000`
- For Android emulator, the app automatically uses `http://10.0.2.2:3000`
- Check `lib/services/api_service.dart` for API configuration

## Hot Reload Commands

While the app is running:
- Press `r` - Hot reload (quick refresh)
- Press `R` - Hot restart (full restart)
- Press `q` - Quit the app

## Building for Production

```bash
# Build APK
flutter build apk

# Build App Bundle (for Play Store)
flutter build appbundle

# Build for iOS (Mac only)
flutter build ios
```
