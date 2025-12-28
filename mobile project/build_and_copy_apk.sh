#!/bin/bash

# Build APK and copy to Desktop
# This script builds the APK and copies it to your Desktop

echo "🔨 Building APK for Anagha Hospital App..."
echo ""

# Set up Java from Android Studio
export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"
export PATH="$JAVA_HOME/bin:$PATH"

# Set Android SDK paths
export ANDROID_HOME=~/Library/Android/sdk
export ANDROID_SDK_ROOT=~/Library/Android/sdk
export PATH="$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$PATH"

# Navigate to project directory
cd "$(dirname "$0")"

# Check if Flutter is installed
if ! command -v flutter &> /dev/null; then
    echo "❌ Flutter is not installed or not in your PATH."
    exit 1
fi

# Check if Android SDK is set up
if [ ! -d "$ANDROID_HOME/platform-tools" ]; then
    echo "❌ Android SDK not found at $ANDROID_HOME"
    echo ""
    echo "Please set up Android SDK:"
    echo "1. Open Android Studio"
    echo "2. Go to Preferences > Appearance & Behavior > System Settings > Android SDK"
    echo "3. Install Android SDK Platform-Tools, Android SDK Platform 34, and Build-Tools"
    echo "4. Make sure SDK location is: $ANDROID_HOME"
    echo ""
    exit 1
fi

echo "✅ Android SDK found"
echo ""

# Get dependencies
echo "📦 Getting Flutter dependencies..."
flutter pub get

echo ""
echo "🏗️  Building release APK..."
flutter build apk --release

if [ $? -eq 0 ]; then
    APK_PATH="$(pwd)/build/app/outputs/flutter-apk/app-release.apk"
    DESKTOP_APK="$HOME/Desktop/anagha_hospital_app.apk"
    
    echo ""
    echo "✅ APK built successfully!"
    echo ""
    echo "📋 Copying APK to Desktop..."
    cp "$APK_PATH" "$DESKTOP_APK"
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ APK copied to Desktop!"
        echo ""
        echo "📱 Your APK file is located at:"
        echo "   $DESKTOP_APK"
        echo ""
        echo "📲 To install on your phone:"
        echo "   1. Transfer the APK file to your Android phone"
        echo "   2. Enable 'Install from Unknown Sources' in your phone settings"
        echo "   3. Open the APK file on your phone and install"
        echo ""
    else
        echo ""
        echo "⚠️  APK built but could not copy to Desktop"
        echo "   APK is at: $APK_PATH"
        echo ""
    fi
else
    echo ""
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi

