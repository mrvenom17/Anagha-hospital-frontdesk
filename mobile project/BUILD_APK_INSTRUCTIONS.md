# Building APK for Anagha Hospital App

## ✅ Current Status

- ✅ Flutter is installed
- ✅ Android Studio is installed  
- ⚠️  Android SDK setup needed (see below)
- ⚠️  Java installation needed (see below)

## Quick Start

Once Android SDK and Java are set up, simply run:
```bash
./build_apk.sh
```

## Setup Required (One-Time)

### Step 1: Install Java

Java is required for Android development. Install it using:

```bash
brew install --cask temurin
```

This will prompt for your password. After installation, verify:
```bash
java -version
```

### Step 2: Set Up Android SDK

**Option A: Using Android Studio (Recommended)**
1. Open Android Studio from Applications
2. On first launch, it will guide you through SDK installation
3. Accept the license agreements
4. Wait for SDK components to download

**Option B: Using Command Line**
After Java is installed, run:
```bash
# Set up Android SDK directory
mkdir -p ~/Library/Android/sdk

# Install required SDK components
sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0"

# Accept licenses
yes | sdkmanager --licenses

# Configure Flutter to use the SDK
flutter config --android-sdk ~/Library/Android/sdk
```

### Step 3: Verify Setup

Run Flutter doctor to check everything:
```bash
flutter doctor
```

You should see checkmarks (✓) for:
- Flutter
- Android toolchain

## Installing Flutter (if not already installed)

### Option 1: Using Homebrew (Recommended for macOS)
```bash
brew install --cask flutter
```

### Option 2: Manual Installation
1. Download Flutter SDK from: https://docs.flutter.dev/get-started/install/macos
2. Extract the zip file to a location like `~/development/flutter`
3. Add Flutter to your PATH by editing `~/.zshrc`:
   ```bash
   export PATH="$PATH:$HOME/development/flutter/bin"
   ```
4. Reload your shell:
   ```bash
   source ~/.zshrc
   ```
5. Verify installation:
   ```bash
   flutter doctor
   ```

## Building the APK

Once Flutter is installed and in your PATH:

1. **Navigate to the project directory:**
   ```bash
   cd "/Users/rahulsharma/Desktop/mobile project"
   ```

2. **Run the build script:**
   ```bash
   ./build_apk.sh
   ```

   Or manually:
   ```bash
   flutter pub get
   flutter build apk --release
   ```

3. **Find your APK:**
   The APK will be located at:
   ```
   build/app/outputs/flutter-apk/app-release.apk
   ```

## Installing on Your Phone

1. **Transfer the APK** to your Android phone (via USB, email, cloud storage, etc.)

2. **Enable Unknown Sources:**
   - Go to Settings → Security (or Settings → Apps → Special Access)
   - Enable "Install from Unknown Sources" or "Install Unknown Apps"
   - Select the app you'll use to install (Files, Chrome, etc.)

3. **Install the APK:**
   - Open the APK file on your phone
   - Tap "Install"
   - Wait for installation to complete

## Troubleshooting

- **"Flutter not found"**: Make sure Flutter is installed and added to your PATH
- **Build errors**: Run `flutter doctor` to check for missing dependencies
- **Gradle errors**: Make sure Android SDK is properly configured
- **Permission errors**: Make sure you have write permissions in the project directory

## Alternative: Build APK Split by ABI

To reduce APK size, you can build split APKs:
```bash
flutter build apk --split-per-abi
```

This creates separate APKs for different architectures (arm64-v8a, armeabi-v7a, x86_64) in:
```
build/app/outputs/flutter-apk/
```

