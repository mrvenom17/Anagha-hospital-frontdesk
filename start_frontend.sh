#!/bin/bash
# Consolidated Frontend and Emulator Starter
# Starts the frontend (web) and an Android emulator

set -e

# Configuration
FRONTEND_WEB_DIR="frontend/web"
FRONTEND_APP_DIR="frontend/app"
WEB_PORT=5173
HOST="localhost"

echo "======================================================================"
echo "           Anagha Hospital - Frontend & Emulator Starter              "
echo "======================================================================"

# Function to find Android SDK
find_android_sdk() {
    if [ -n "$ANDROID_HOME" ] && [ -d "$ANDROID_HOME" ]; then
        echo "$ANDROID_HOME"
    elif [ -d "$HOME/Library/Android/sdk" ]; then
        echo "$HOME/Library/Android/sdk"
    elif [ -d "/opt/android-sdk" ]; then
        echo "/opt/android-sdk"
    else
        echo ""
    fi
}

SDK_PATH=$(find_android_sdk)

if [ -z "$SDK_PATH" ]; then
    echo "⚠️  Warning: Android SDK not found. Cannot launch emulator automatically."
else
    echo "✅ Found Android SDK at: $SDK_PATH"
    EMULATOR_BIN="$SDK_PATH/emulator/emulator"
    
    if [ -f "$EMULATOR_BIN" ]; then
        echo "🔍 Looking for available Android Emulators..."
        # List AVDs
        AVD_LIST=$("$EMULATOR_BIN" -list-avds 2>/dev/null || true)
        
        if [ -n "$AVD_LIST" ]; then
            # Get the first AVD
            FIRST_AVD=$(echo "$AVD_LIST" | head -n 1)
            echo "🚀 Launching Emulator: $FIRST_AVD..."
            # Launch in background
            "$EMULATOR_BIN" -avd "$FIRST_AVD" -netdelay none -netspeed full &
            echo "ℹ️  Emulator is starting up in the background."
        else
            echo "⚠️  No AVDs (Android Virtual Devices) found. Please create one in Android Studio."
        fi
    else
        echo "⚠️  Emulator binary not found at $EMULATOR_BIN"
    fi
fi

echo "----------------------------------------------------------------------"
echo "🚀 Starting Frontend Web Server ($FRONTEND_WEB_DIR)..."

# Ensure we have the web directory
if [ ! -d "$FRONTEND_WEB_DIR" ]; then
    echo "❌ Error: $FRONTEND_WEB_DIR directory not found!"
    exit 1
fi

cd "$FRONTEND_WEB_DIR"

# Install dependencies if necessary
if [ ! -d "node_modules" ]; then
    echo "📦 Installing npm dependencies..."
    npm install
fi

# Try to clear port 5173 if busy
if lsof -i :$WEB_PORT >/dev/null 2>&1; then
    echo "ℹ️  Cleaning up port $WEB_PORT..."
    lsof -ti:$WEB_PORT | xargs kill -9 >/dev/null 2>&1 || true
fi

echo "🌐 Frontend (Web) starting at: http://$HOST:$WEB_PORT/"
echo "ℹ️  To run the Flutter app on the emulator, open another terminal and run:"
echo "   cd $FRONTEND_APP_DIR && flutter run"
echo "----------------------------------------------------------------------"

# Start the web development server
npm run dev
