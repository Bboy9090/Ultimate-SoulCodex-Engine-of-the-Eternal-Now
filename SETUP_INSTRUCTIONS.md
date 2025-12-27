# Ultimate SoulCodex Engine - Setup Instructions

## ⚠️ Important Notice

This repository contains a **partially restored** version of the Ultimate SoulCodex Engine. The complete source code should be retrieved from the original Replit deployment, as many files are either missing or using placeholder implementations.

## Current Status

✅ **Working:**
- Build system (Vite + esbuild)
- Server infrastructure
- Basic routing structure
- Client placeholder application

⚠️ **Incomplete/Placeholder:**
- Client application (minimal UI only)
- Shared schema definitions (basic structure only)
- Authentication system (placeholder)
- Complete service implementations

## Prerequisites

- Node.js 20.x or later
- PostgreSQL database (Neon, local, or other)
- npm or pnpm package manager

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Bboy9090/Ultimate-SoulCodex-Engine-of-the-Eternal-Now.git
cd Ultimate-SoulCodex-Engine-of-the-Eternal-Now
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```bash
cp .env.example .env
```

Edit `.env` and fill in your actual values for:

- `DATABASE_URL`: Your PostgreSQL connection string
- `OPENAI_API_KEY` or `GEMINI_API_KEY`: For AI features
- `SESSION_SECRET`: Generate with `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`
- Other optional variables as needed

### 4. Set Up Database

```bash
npm run db:push
```

This will create all necessary database tables using Drizzle ORM.

### 5. Build the Application

```bash
npm run build
```

This will:
1. Build the client application with Vite (outputs to `dist/public/`)
2. Bundle the server application with esbuild (outputs to `dist/index.js`)

### 6. Run the Application

#### Development Mode

```bash
npm run dev
```

This starts the development server with hot-reloading.

#### Production Mode

```bash
npm start
```

This runs the built application from the `dist/` directory.

## Project Structure

```
.
├── client/              # Frontend React application
│   ├── src/
│   │   ├── main.tsx    # Entry point
│   │   ├── App.tsx     # Main app component
│   │   └── index.css   # Global styles
│   └── index.html      # HTML template
├── server/              # Backend server
│   └── index.ts        # Server entry point
├── services/            # Business logic services
│   ├── astrology.ts
│   ├── numerology.ts
│   ├── gemini.ts
│   └── ...
├── shared/              # Shared types and schemas
│   ├── schema.ts       # Database schema (Drizzle ORM)
│   └── notification-schemas.ts
├── routes/              # API route handlers
│   ├── chat.ts
│   └── compatibility.ts
├── auth/                # Authentication utilities
│   └── passwordUtils.ts
├── utils/               # Utility functions
│   └── timeout.ts
├── routes.ts            # Main route registration
├── viteSetup.ts         # Vite development server setup
├── vite.config.ts       # Vite configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server with hot-reloading
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio for database management

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/hello` - Test API endpoint
- (Many other endpoints - see `routes.ts` for complete list)

## Deployment

### Local/Standalone Deployment

1. Follow all installation steps above
2. Set `NODE_ENV=production` in `.env`
3. Run `npm run build`
4. Run `npm start`

### Electron Desktop App

An Electron wrapper (`electron-main.cjs`) is included for desktop deployment:

```bash
# Install Electron (if not already installed)
npm install -D electron

# Build the application
npm run build

# Run with Electron
npx electron electron-main.cjs
```

### Cloud Deployment (Render, Railway, etc.)

See `RENDER_DEPLOY.md` for detailed cloud deployment instructions.

## Restoring Complete Source Code

To restore the complete application from your Replit deployment:

### 1. From Replit, Download Complete Code

In your Replit workspace:

```bash
# Create a complete backup
zip -r soulcodex-complete.zip . -x "node_modules/*" -x ".git/*" -x "dist/*"
```

### 2. Extract and Replace

```bash
# Extract to a temporary directory
unzip soulcodex-complete.zip -d /tmp/soulcodex-backup

# Copy complete client directory
cp -r /tmp/soulcodex-backup/client/* ./client/

# Copy complete shared directory
cp -r /tmp/soulcodex-backup/shared/* ./shared/

# Copy any missing service files
cp -r /tmp/soulcodex-backup/services/* ./services/

# Copy authentication implementation
cp -r /tmp/soulcodex-backup/replitAuth.ts ./replitAuth.ts
```

### 3. Rebuild

```bash
npm install
npm run build
```

## Troubleshooting

### Build Failures

- Ensure you're using Node.js 20.x
- Delete `node_modules` and `dist` directories, then run `npm install` again
- Check that all required environment variables are set

### Database Connection Issues

- Verify your `DATABASE_URL` is correct
- Ensure your database server is running
- Check firewall/network settings if using remote database

### Missing Features

- Many features require the complete source code from Replit
- Check console warnings for placeholder implementations
- Refer to `DEPLOYMENT_READINESS_REPORT.md` for feature list

## Environment Variables Reference

See `.env.example` for a complete list of environment variables and their purposes.

### Required

- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Secret for session encryption

### Optional but Recommended

- `OPENAI_API_KEY` or `GEMINI_API_KEY` - For AI-powered features
- `SENDER_EMAIL`, `MAIL_HOST`, `MAIL_PORT`, `MAIL_USER`, `MAIL_PASS` - For email notifications

### For Production Features

- Stripe keys for payment processing
- VAPID keys for push notifications
- Admin password for admin features

## Support

For issues or questions:
1. Check existing documentation (RENDER_DEPLOY.md, APP_STORE_DEPLOYMENT_GUIDE.md)
2. Review the code in your original Replit deployment
3. Check console logs for specific error messages

## License

MIT
