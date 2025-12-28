#!/bin/bash

# Wait for APK build and copy to Desktop

APK_SOURCE="/Users/rahulsharma/Desktop/mobile project/build/app/outputs/flutter-apk/app-release.apk"
APK_DEST="$HOME/Desktop/anagha_hospital_app.apk"

echo "⏳ Waiting for APK build to complete..."
echo ""

# Wait up to 10 minutes for the APK to be created
for i in {1..60}; do
    if [ -f "$APK_SOURCE" ]; then
        echo "✅ APK found! Copying to Desktop..."
        cp "$APK_SOURCE" "$APK_DEST"
        if [ $? -eq 0 ]; then
            echo ""
            echo "✅ Success! APK copied to Desktop:"
            echo "   $APK_DEST"
            ls -lh "$APK_DEST"
            echo ""
            echo "📱 You can now transfer this APK to your Android phone and install it!"
            exit 0
        else
            echo "❌ Failed to copy APK"
            exit 1
        fi
    fi
    echo "   Checking... ($i/60)"
    sleep 10
done

echo "❌ Timeout: APK not found after 10 minutes"
echo "   Please check the build status manually"
exit 1

