#!/bin/bash

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}================================================================${NC}"
echo -e "${BLUE}   🏥 Anagha Hospital Solutions - Dev Environment Launcher      ${NC}"
echo -e "${BLUE}================================================================${NC}"

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo -e "${YELLOW}Python 3 is not installed. Please install it to run the backend server.${NC}"
    exit 1
fi

# Check if Flutter is installed
if ! command -v flutter &> /dev/null; then
    echo -e "${YELLOW}Flutter is not installed or not in PATH.${NC}"
    echo -e "${YELLOW}You can still run the server, but you'll need to run the app from Android Studio.${NC}"
fi

echo -e "\n${GREEN}[1/3] Setting up backend server...${NC}"

# Kill any existing process on port 8000
echo "Checking for existing server process..."
lsof -ti:8000 | xargs kill -9 2>/dev/null

# Start server in background
echo "Starting FastAPI server..."
python3 server.py > server.log 2>&1 &
SERVER_PID=$!

echo -e "${GREEN}✅ Server started (PID: $SERVER_PID)${NC}"
echo -e "   - Admin Panel: http://127.0.0.1:8000/admin_panel.html"
echo -e "   - API Docs:    http://127.0.0.1:8000/docs"
echo -e "   - Health Check: http://127.0.0.1:8000/health"

echo -e "\n${GREEN}[2/3] Waiting for server to initialize...${NC}"
sleep 3

# Check if server is responding
if curl -s http://127.0.0.1:8000/health > /dev/null; then
    echo -e "${GREEN}✅ Server is healthy and responding!${NC}"
else
    echo -e "${YELLOW}⚠️ Server might be taking longer to start. Check server.log for details.${NC}"
fi

echo -e "\n${GREEN}[3/3] Ready for Mobile App Development${NC}"
echo -e "${BLUE}----------------------------------------------------------------${NC}"
echo -e "To run the mobile app:"
echo -e "1. Open Android Studio"
echo -e "2. Select your Android Emulator or Physical Device"
echo -e "3. Click the Green 'Run' button (▶)"
echo -e "${BLUE}----------------------------------------------------------------${NC}"
echo -e "NOTE: The app is configured to connect to:"
echo -e " - Android Emulator: http://10.0.2.2:8000"
echo -e " - Web/iOS:          http://127.0.0.1:8000"
echo -e "${BLUE}----------------------------------------------------------------${NC}"

echo -e "\n${YELLOW}Press Ctrl+C to stop the server when you are done.${NC}"

# Keep script running to maintain server
trap "kill $SERVER_PID; echo -e '\n🛑 Server stopped.'; exit" INT
wait
