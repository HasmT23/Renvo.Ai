# Renvo.Ai - AI-Powered Car Consultant

## 🏗️ Monorepo Structure - Sprint 1 ✅ COMPLETED

A modern monorepo containing a React Native mobile app, shared packages, and AI backend services for optimizing vehicle listings using AI-powered insights.

## 📁 Project Structure

```
Renvo.Ai/
│
├── /apps
│   ├── /web                   # Next.js app (Coming in Sprint 2)
│   └── /mobile                # Expo React Native app ✅
│       ├── /assets
│       ├── /components
│       ├── /screens
│       ├── /navigation
│       ├── /utils
│       └── App.js
│
├── /packages
│   ├── /api-agent             # AI logic backend service ✅
│   │   ├── /models
│   │   ├── /routes  
│   │   ├── /utils
│   │   └── index.js
│   │
│   └── /shared                # Shared types, components, constants ✅
│       ├── types.ts
│       ├── validation.ts
│       ├── constants.ts
│       └── index.ts
│
├── /firebase                  # Firebase config & functions ✅
│   ├── /functions
│   ├── config.js
│   └── firebase.json
│
├── .env.example              # Environment variables template
├── package.json              # Root workspace config
├── turbo.json               # Turborepo configuration
└── README.md
```

## 🚀 Features Completed (Sprint 1)

### ✅ Mobile App (`/apps/mobile`)
- **Authentication Flow** with Firebase
- **Google & Apple Sign-In** with native modals
- **Splash Screen** with Renvo branding
- **Home Screen** with "Ready to List Your Vehicle" card
- **Settings Screen** with logout functionality
- **Bottom Tab Navigation**
- **React Native Paper** UI components

### ✅ Shared Package (`/packages/shared`)
- **TypeScript Types** for all data models
- **Validation Utilities** for forms and inputs
- **Constants** including UI themes, error messages
- **Photo Configuration** (supports up to 55 high-res photos)
- **Vehicle & AI Analysis Types**

### ✅ API Agent (`/packages/api-agent`)
- **Express Server** with security middleware
- **AI Analysis Endpoints** (placeholder for Sprint 2)
- **Photo Processing** capabilities
- **Health Check** endpoint

### ✅ Firebase Integration (`/firebase`)
- **Authentication** configuration
- **Firestore** rules and indexes
- **Storage** for photo uploads
- **Cloud Functions** setup

## 🛠️ Tech Stack

### Mobile App
- **React Native** 0.72.6 + **Expo** ~49.0.0
- **Firebase** v9 Authentication & Storage
- **React Native Paper** for Material Design
- **React Navigation** v6 for navigation
- **Native Google/Apple Sign-In**

### Backend Services
- **Node.js** + **Express** for API agent
- **OpenAI** integration for AI analysis
- **Sharp** for image processing
- **Firebase Admin** for server-side operations

### Shared Infrastructure
- **TypeScript** for type safety
- **Turborepo** for monorepo management
- **Firebase** for backend services
- **ESLint** for code quality

## 📋 Getting Started

### Prerequisites
- **Node.js** 18+
- **Expo CLI** (`npm install -g @expo/cli`)
- **iOS Simulator** (Mac) or **Android Emulator**
- **Firebase Project** with Authentication enabled

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
```bash
cp .env.example .env.local
# Update with your Firebase credentials
```

3. **Start the development servers:**

```bash
# Start mobile app
npm run mobile

# Start API agent
cd packages/api-agent && npm run dev

# Start all services (with Turbo)
npm run dev
```

## 🎯 Development Commands

```bash
# Root commands
npm run dev          # Start all services
npm run build        # Build all packages
npm run lint         # Lint all packages
npm run test         # Run all tests

# Mobile app specific
npm run mobile       # Start Expo dev server
cd apps/mobile && npm run ios      # iOS simulator
cd apps/mobile && npm run android  # Android emulator

# API agent specific  
cd packages/api-agent && npm run dev   # Start API server
cd packages/api-agent && npm run start # Production mode
```

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project
2. Enable Authentication (Google, Apple, Email)
3. Set up Firestore database
4. Configure Storage for photo uploads
5. Update `firebase/config.js` with your credentials

### Google Sign-In Setup
1. Configure OAuth in Google Cloud Console
2. Add your app's bundle ID (iOS) and package name (Android)
3. Update `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID` in environment variables

### Apple Sign-In Setup (iOS only)
1. Configure Sign in with Apple in Apple Developer Console
2. Add capability in Expo app config
3. Automatically handled by `expo-apple-authentication`

## 📱 Mobile App Structure

```
apps/mobile/
├── screens/
│   ├── SplashScreen.js          # App launch screen
│   ├── AuthGatewayScreen.js     # Login/signup with native modals
│   ├── HomeScreen.js            # "Ready to List" main screen
│   └── SettingsScreen.js        # User settings & logout
├── navigation/
│   └── MainTabNavigator.js      # Bottom tab navigation
└── App.js                       # Main app component
```

## 🔮 Sprint 1 Accomplishments

Following the exact rebuild prompts:

1. **✅ Splash + Auth Gateway**: OpenAI-inspired login with native system modals
2. **✅ Design Consistency**: Clean white background, minimal Renvo branding  
3. **✅ Navigation Structure**: Bottom tab navigation with Home/Settings
4. **✅ Settings Management**: Logout functionality with Firebase integration
5. **✅ Monorepo Architecture**: Proper separation of mobile, shared, and backend code

## 🚀 Ready for Sprint 2

**Next Sprint Features:**
- **Vehicle Photo Upload** (up to 55 high-resolution photos)
- **AI Analysis Integration** with the API agent
- **Photo Management UI** with gallery and editing
- **Vehicle Information Forms** with validation
- **Price Estimation** and market insights
- **Web Dashboard** (Next.js app)

## 🚨 Environment Setup Required

Create a `.env.local` file with your actual credentials:

```bash
# Required for mobile app
EXPO_PUBLIC_FIREBASE_API_KEY=your-actual-api-key
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=your-google-client-id

# Required for API agent
OPENAI_API_KEY=your-openai-key
```

## 📄 License

Private project for Renvo development. 