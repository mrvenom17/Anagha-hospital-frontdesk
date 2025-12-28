#!/bin/bash

# Build APK and copy to Desktop
# This script will build the APK and automatically copy it to your Desktop

set -e

PROJECT_DIR="/Users/rahulsharma/Desktop/mobile project"
APK_SOURCE="$PROJECT_DIR/build/app/outputs/flutter-apk/app-release.apk"
APK_DEST="$HOME/Desktop/anagha_hospital_app.apk"

# Set up environment
export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"
export PATH="$JAVA_HOME/bin:$PATH"
export ANDROID_HOME=~/Library/Android/sdk
export ANDROID_SDK_ROOT=~/Library/Android/sdk

cd "$PROJECT_DIR"

echo "🔨 Building APK for Anagha Hospital App..."
echo "   This may take several minutes..."
echo ""

# Build the APK
flutter build apk --release

if [ $? -eq 0 ] && [ -f "$APK_SOURCE" ]; then
    echo ""
    echo "✅ APK built successfully!"
    echo ""
    echo "📋 Copying APK to Desktop..."
    cp "$APK_SOURCE" "$APK_DEST"
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ SUCCESS! APK copied to Desktop!"
        echo ""
        echo "📱 Your APK file:"
        ls -lh "$APK_DEST"
        echo ""
        echo "📲 To install on your Android phone:"
        echo "   1. Transfer '$APK_DEST' to your Android phone"
        echo "   2. Enable 'Install from Unknown Sources' in your phone settings"
        echo "   3. Open the APK file on your phone and install"
        echo ""
        exit 0
    else
        echo ""
        echo "⚠️  APK built but could not copy to Desktop"
        echo "   APK is at: $APK_SOURCE"
        echo ""
        exit 1
    fi
else
    echo ""
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi

