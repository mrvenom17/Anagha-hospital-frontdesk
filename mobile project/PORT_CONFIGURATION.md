# Port Configuration Guide

## Current Port Setup

### Default Configuration:
- **API Server:** Port `8000`
- **Admin Panel:** Port `8000` (same server)
- **Flutter App:** Connects to `http://127.0.0.1:8000`

## How to Change Ports

### Option 1: Update `.env` File

Add or modify these lines in your `.env` file:

```env
# Server Configuration
SERVER_HOST=127.0.0.1
SERVER_PORT=8000

# API Configuration (for Flutter app)
API_BASE_URL=http://127.0.0.1:8000

# Admin Panel Configuration
ADMIN_PANEL_PORT=8000
ADMIN_PANEL_URL=http://127.0.0.1:8000/admin_panel.html
```

### Option 2: Use Different Ports for Different Services

If you want to run multiple services on different ports:

#### Example: API on 8000, Admin Panel on 8080

**`.env` file:**
```env
SERVER_PORT=8000
API_BASE_URL=http://127.0.0.1:8000
ADMIN_PANEL_PORT=8080
ADMIN_PANEL_URL=http://127.0.0.1:8080/admin_panel.html
```

**Note:** Currently, everything runs on the same FastAPI server, so they share the same port. If you need separate ports, you would need to run separate server instances.

## Flutter App Configuration

### Update API Base URL

Edit `lib/services/api_service.dart`:

```dart
class ApiService {
  // Change this to match your server port
  static const String baseUrl = 'http://127.0.0.1:8000';
  
  // Or use environment variable (requires flutter_dotenv package)
  // static const String baseUrl = dotenv.env['API_BASE_URL'] ?? 'http://127.0.0.1:8000';
}
```

### For Production

When deploying to production, update to your domain:

```dart
static const String baseUrl = 'https://api.yourdomain.com';
```

## Port Recommendations

### Development:
- **8000** - API Server (default)
- **3000** - Alternative if 8000 is busy
- **5000** - Another alternative

### Production:
- **443** - HTTPS (standard)
- **80** - HTTP (standard)
- Use a reverse proxy (nginx) to route to your app

## Testing Different Ports

1. **Update `.env`:**
   ```env
   SERVER_PORT=3000
   ```

2. **Update Flutter app:**
   ```dart
   static const String baseUrl = 'http://127.0.0.1:3000';
   ```

3. **Restart server:**
   ```bash
   python3 server.py
   ```

4. **Test connection:**
   ```bash
   curl http://127.0.0.1:3000/health
   ```

## Common Port Conflicts

If port 8000 is already in use:

```bash
# Check what's using port 8000
lsof -i :8000

# Kill the process or use a different port
```

## Environment-Specific Ports

### Development (.env.development):
```env
SERVER_PORT=8000
API_BASE_URL=http://127.0.0.1:8000
```

### Production (.env.production):
```env
SERVER_PORT=443
API_BASE_URL=https://api.yourdomain.com
```

## Summary

- **Default:** Everything runs on port `8000`
- **Change:** Update `SERVER_PORT` in `.env` and `baseUrl` in Flutter app
- **Same Server:** API and Admin Panel share the same port (same FastAPI instance)
- **Production:** Use HTTPS (443) with your domain

