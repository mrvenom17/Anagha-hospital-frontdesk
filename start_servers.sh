#!/bin/bash
# Consolidated Server Starter for Hospital Project
# Starts the unified FastAPI backend (main.py)

set -e

# Configuration
BACKEND_DIR="backend"
PORT=8000
HOST="0.0.0.0"

echo "======================================================================"
echo "                   Anagha Hospital - Unified Backend                  "
echo "======================================================================"

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "❌ Error: .env file not found in root directory!"
    exit 1
fi

# Navigate to backend
cd "$BACKEND_DIR"

# Check for virtual environment
if [ -d "venv" ]; then
    echo "✅ Activating virtual environment..."
    source venv/bin/activate
else
    echo "⚠️  Warning: venv not found. Using system Python."
fi

# Check for main.py
if [ ! -f "main.py" ]; then
    echo "❌ Error: main.py not found in $BACKEND_DIR!"
    exit 1
fi

# Kill any process on port 8000
if lsof -i :$PORT >/dev/null 2>&1; then
    echo "ℹ️  Cleaning up port $PORT..."
    lsof -ti:$PORT | xargs kill -9 >/dev/null 2>&1 || true
fi

echo "🚀 Starting FastAPI Unified Backend on http://$HOST:$PORT..."
echo "ℹ️  Interactive Docs: http://localhost:$PORT/docs"
echo "----------------------------------------------------------------------"

# Start uvicorn
# Using --reload for development as per original scripts intent
python3 -m uvicorn main:app --host $HOST --port $PORT --reload
