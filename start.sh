#!/bin/bash
# Simple startup script for Soul Codex Engine

set -e

echo "🔮 Ultimate SoulCodex Engine - Startup Script"
echo "=============================================="
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found"
    echo "📝 Please create a .env file based on .env.example"
    echo ""
    echo "Quick setup:"
    echo "  cp .env.example .env"
    echo "  # Then edit .env with your actual values"
    exit 1
fi

# Check if node_modules exists
if [ ! -d node_modules ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Check if dist exists
if [ ! -d dist ]; then
    echo "🔨 Building application..."
    npm run build
fi

# Load environment variables
set -a
source .env
set +a

# Check required variables
if [ -z "$DATABASE_URL" ]; then
    echo "❌ Error: DATABASE_URL not set in .env"
    exit 1
fi

if [ -z "$SESSION_SECRET" ]; then
    echo "❌ Error: SESSION_SECRET not set in .env"
    echo "💡 Generate one with: node -e \"console.log(require('crypto').randomBytes(64).toString('hex'))\""
    exit 1
fi

echo "✅ Environment variables loaded"
echo "🚀 Starting server..."
echo ""

# Start the server
NODE_ENV="${NODE_ENV:-production}" PORT="${PORT:-3000}" node dist/index.js
