#!/bin/bash

# Build APK Script for Anagha Hospital App
# This script builds a release APK file for testing on your phone

echo "🔨 Building APK for Anagha Hospital App..."
echo ""

# Check if Flutter is installed
if ! command -v flutter &> /dev/null; then
    echo "❌ Flutter is not installed or not in your PATH."
    echo ""
    echo "Please install Flutter first:"
    echo "1. Download Flutter from: https://flutter.dev/docs/get-started/install/macos"
    echo "2. Extract it to a location (e.g., ~/development/flutter)"
    echo "3. Add Flutter to your PATH by adding this to ~/.zshrc:"
    echo "   export PATH=\"\$PATH:~/development/flutter/bin\""
    echo "4. Run: source ~/.zshrc"
    echo "5. Run: flutter doctor"
    echo ""
    exit 1
fi

# Check Flutter installation
echo "✅ Flutter found. Checking installation..."
flutter doctor --version

echo ""
echo "📦 Getting Flutter dependencies..."
flutter pub get

echo ""
echo "🏗️  Building release APK..."
flutter build apk --release

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ APK built successfully!"
    echo ""
    echo "📱 Your APK file is located at:"
    echo "   $(pwd)/build/app/outputs/flutter-apk/app-release.apk"
    echo ""
    echo "📲 To install on your phone:"
    echo "   1. Transfer the APK file to your Android phone"
    echo "   2. Enable 'Install from Unknown Sources' in your phone settings"
    echo "   3. Open the APK file on your phone and install"
    echo ""
else
    echo ""
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi

