# Server Runner - Quick Start Guide

## Overview

The `run_servers.py` script allows you to run both Mobile and Web servers from the main Hospital folder with debugging information and status checks.

## Usage

### Run Both Servers (Default)

```bash
cd /Users/rahulsharma/Desktop/Hospital
python3 run_servers.py
```

This will:
- ✅ Check `.env` file configuration
- ✅ Test Supabase connection
- ✅ Check if ports 8000 and 3000 are available
- ✅ Start Mobile server on port 8000
- ✅ Start Web server on port 3000
- ✅ Display real-time server logs with color coding
- ✅ Show server status and URLs

### Run Only Mobile Server

```bash
python3 run_servers.py --mobile
```

### Run Only Web Server

```bash
python3 run_servers.py --web
```

### Check Configuration Only

```bash
python3 run_servers.py --check
```

This will verify:
- `.env` file exists
- Supabase credentials are configured
- Supabase connection works

## Server URLs

### Mobile Server (Port 8000)
- **API**: http://127.0.0.1:8000
- **Docs**: http://127.0.0.1:8000/docs
- **Health**: http://127.0.0.1:8000/health
- **Admin Panel**: http://127.0.0.1:8000/admin_panel.html

### Web Server (Port 3000)
- **Web UI**: http://127.0.0.1:3000
- **API**: http://127.0.0.1:3000
- **Docs**: http://127.0.0.1:3000/docs
- **Health**: http://127.0.0.1:3000/health

## Features

### ✅ Automatic Checks
- Environment file validation
- Supabase connection testing
- Port availability checking
- Server health checks

### 🎨 Color-Coded Output
- **Green** ✅: Success messages
- **Yellow** ⚠️: Warnings
- **Red** ❌: Errors
- **Blue** ℹ️: Information
- **Cyan**: Mobile server logs
- **Magenta**: Web server logs

### 🛑 Graceful Shutdown
- Press `CTRL+C` to stop all servers
- Servers are terminated gracefully
- Force kill if necessary

## Troubleshooting

### Port Already in Use

If you see "Port XXXX is already in use":

```bash
# Find the process using the port
lsof -ti:8000    # For mobile server
lsof -ti:3000    # For web server

# Kill the process
kill $(lsof -ti:8000)
kill $(lsof -ti:3000)
```

### Supabase Connection Issues

If Supabase connection fails:
1. Check `.env` file exists in `Hospital/` folder
2. Verify `SUPABASE_URL` and `SUPABASE_KEY` are set
3. Check your internet connection
4. Verify Supabase project is active

### Server Not Starting

1. **Check dependencies**:
   ```bash
   cd "mobile project" && pip3 install -r requirements.txt
   cd "../hospital project" && pip3 install -r requirements.txt
   ```

2. **Check Python version**:
   ```bash
   python3 --version  # Should be 3.7+
   ```

3. **Check for syntax errors**:
   ```bash
   python3 -m py_compile "mobile project/server.py"
   python3 -m py_compile "hospital project/main.py"
   ```

## Example Output

```
======================================================================
              Hospital Project - Server Runner
======================================================================

ℹ️  Checking environment configuration...
✅ .env file found: /Users/rahulsharma/Desktop/Hospital/.env
✅ SUPABASE_URL: https://lrzlkoxqwtzwmbehfngn.s...
✅ SUPABASE_KEY: ******************** (hidden)

ℹ️  Testing Supabase connection...
✅ Supabase connection successful

ℹ️  Starting Mobile Server (Port 8000)...
[Cyan][Mobile] ✅ Supabase client initialized successfully
[Cyan][Mobile] 🚀 Starting Anagha Hospital Solutions API Server

ℹ️  Starting Web Server (Port 3000)...
[Magenta][Web] ✅ Supabase client initialized successfully
[Magenta][Web] 🚀 Starting Hospital Booking System Web Server

======================================================================
                           Server Status
======================================================================

✅ Mobile server is ready!
✅ Mobile Server: http://127.0.0.1:8000
  ℹ️  API Docs: http://127.0.0.1:8000/docs
  ℹ️  Health: http://127.0.0.1:8000/health

✅ Web server is ready!
✅ Web Server: http://127.0.0.1:3000
  ℹ️  Web UI: http://127.0.0.1:3000
  ℹ️  API Docs: http://127.0.0.1:3000/docs

======================================================================
                          Servers Running
======================================================================

ℹ️  Press CTRL+C to stop all servers
```

## Requirements

- Python 3.7 or higher
- All dependencies installed (see requirements.txt in each project)
- `.env` file in the Hospital folder
- Ports 8000 and 3000 available

## Notes

- Both servers share the same Supabase database
- Changes in one server are immediately visible in the other
- Logs are color-coded for easy identification
- Use `--check` to verify configuration before running servers

