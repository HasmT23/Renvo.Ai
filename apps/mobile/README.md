# Renvo Mobile App

This is the Expo React Native mobile application for Renvo - AI Car Consultant.

## Sprint 1 - Foundation Setup

### Tech Stack
- **Framework**: Expo SDK 50 with React Native
- **Language**: TypeScript
- **Navigation**: Expo Router
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **Camera**: Expo Camera & Image Picker
- **AI**: OpenAI API (via backend)

### Getting Started

1. Install dependencies:
```bash
cd apps/mobile
npm install
```

2. Install Expo CLI globally (if not already installed):
```bash
npm install -g @expo/cli
```

3. Set up environment variables:
Create a `.env.local` file in the `apps/mobile` directory with your Firebase configuration:

```env
EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key_here
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm start
```

5. Run on device/simulator:
- **iOS**: Press `i` in the terminal or scan QR code with Camera app
- **Android**: Press `a` in the terminal or scan QR code with Expo Go app
- **Web**: Press `w` in the terminal

### Project Structure

```
apps/mobile/
├── assets/             # Images, icons, splash screens
├── components/         # Reusable UI components
├── screens/           # App screens/pages
├── lib/              # Library configurations (Firebase, etc.)
├── utils/            # Utility functions
├── App.tsx           # Main app entry point
├── app.json          # Expo configuration
├── babel.config.js   # Babel configuration
└── tsconfig.json     # TypeScript configuration
```

### Key Features for Sprint 1
- Basic app structure with Expo Router
- Firebase integration (Auth, Firestore, Storage)
- Splash screen with Renvo branding
- Camera and image picker setup
- TypeScript configuration
- Cross-platform support (iOS, Android, Web)

### Development Tips

1. **Expo Go**: Use the Expo Go app to test on physical devices
2. **Hot Reload**: Changes automatically reflect in the app
3. **TypeScript**: Full TypeScript support with strict mode enabled
4. **Firebase**: Environment variables are prefixed with `EXPO_PUBLIC_`

### Next Steps
- Set up Google Sign-In with Firebase Auth
- Create login screen with authentication flow
- Implement image capture and upload functionality
- Add navigation between screens
- Create reusable UI components

### Building for Production

When ready to build:
```bash
# Install EAS CLI
npm install -g @eas/cli

# Build for iOS
npm run build:ios

# Build for Android
npm run build:android
```

### Permissions Required
- **Camera**: For taking vehicle photos
- **Photo Library**: For uploading existing images
- **Internet**: For Firebase and API communications 