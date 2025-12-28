#!/bin/bash
cd "/Users/rahulsharma/Desktop/mobile project"

echo "============================================================"
echo "🚀 Starting Anagha Hospital Solutions Admin Panel Server"
echo "============================================================"

# Check if port 8000 is in use
if lsof -Pi :8000 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo "⚠️  Port 8000 is already in use!"
    echo "Stopping existing server on port 8000..."
    kill $(lsof -ti:8000) 2>/dev/null
    sleep 2
fi

# Check if FastAPI is installed
if ! python3 -c "import fastapi" 2>/dev/null; then
    echo "❌ FastAPI not found. Installing..."
    pip3 install fastapi uvicorn
fi

echo ""
echo "📁 Starting server..."
echo "📁 Admin Panel: http://127.0.0.1:8000/admin_panel.html"
echo "📁 Admin Panel (short): http://127.0.0.1:8000/admin"
echo "📁 Home: http://127.0.0.1:8000/"
echo "🔍 API Docs: http://127.0.0.1:8000/docs"
echo "💚 Health Check: http://127.0.0.1:8000/health"
echo ""
echo "Press CTRL+C to stop the server"
echo "============================================================"
echo ""

# Start the server
python3 server.py
