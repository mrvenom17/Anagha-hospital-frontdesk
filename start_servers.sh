#!/bin/bash
# Quick start script for Hospital Project Servers
# Usage: ./start_servers.sh

cd "$(dirname "$0")"
python3 run_servers.py "$@"

