// App Configuration
export const APP_CONFIG = {
  name: 'Renvo',
  version: '1.0.0',
  description: 'AI-Powered Car Consultant',
} as const;

// API Configuration
export const API_CONFIG = {
  baseUrl: process.env.EXPO_PUBLIC_API_URL || 'https://api.renvo.ai',
  timeout: 30000,
  retries: 3,
} as const;

// Firebase Collections
export const COLLECTIONS = {
  USERS: 'users',
  VEHICLES: 'vehicles',
  ANALYSES: 'analyses',
  PHOTOS: 'photos',
  SETTINGS: 'settings',
} as const;

// Photo Configuration
export const PHOTO_CONFIG = {
  maxPhotos: 55,
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedFormats: ['jpg', 'jpeg', 'png', 'heic'],
  compressionQuality: 0.8,
  thumbnailSize: 200,
} as const;

// Vehicle Configuration
export const VEHICLE_CONFIG = {
  minYear: 1900,
  maxYear: new Date().getFullYear() + 1,
  minMileage: 0,
  maxMileage: 999999,
} as const;

// Validation Rules
export const VALIDATION = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  vin: {
    pattern: /^[A-HJ-NPR-Z0-9]{17}$/,
    message: 'VIN must be 17 characters',
  },
  phone: {
    pattern: /^\+?[1-9]\d{1,14}$/,
    message: 'Please enter a valid phone number',
  },
} as const;

// UI Constants
export const UI = {
  colors: {
    primary: '#2563eb',
    secondary: '#6b7280',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#dc2626',
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#111827',
    textSecondary: '#6b7280',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  typography: {
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
      xxl: 28,
      xxxl: 36,
    },
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
} as const;

// Storage Keys
export const STORAGE_KEYS = {
  USER_PREFERENCES: '@renvo/user_preferences',
  VEHICLE_DRAFT: '@renvo/vehicle_draft',
  PHOTO_CACHE: '@renvo/photo_cache',
  ANALYTICS_OPT_IN: '@renvo/analytics_opt_in',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network connection error. Please check your internet connection.',
  AUTHENTICATION_FAILED: 'Authentication failed. Please try logging in again.',
  UPLOAD_FAILED: 'Failed to upload photo. Please try again.',
  ANALYSIS_FAILED: 'AI analysis failed. Please try again later.',
  PERMISSION_DENIED: 'Permission denied. Please check your app permissions.',
  INVALID_DATA: 'Invalid data provided. Please check your input.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  VEHICLE_SAVED: 'Vehicle information saved successfully',
  PHOTO_UPLOADED: 'Photo uploaded successfully',
  ANALYSIS_COMPLETE: 'AI analysis completed successfully',
  PROFILE_UPDATED: 'Profile updated successfully',
  SETTINGS_SAVED: 'Settings saved successfully',
} as const;

// Feature Flags
export const FEATURE_FLAGS = {
  AI_ANALYSIS: true,
  PHOTO_ENHANCEMENT: true,
  MARKET_INSIGHTS: true,
  SOCIAL_SHARING: false,
  PUSH_NOTIFICATIONS: true,
} as const;

// Photo Angles for AI Analysis
export const PHOTO_ANGLES = [
  { key: 'front', label: 'Front View', required: true },
  { key: 'rear', label: 'Rear View', required: true },
  { key: 'side_left', label: 'Left Side', required: true },
  { key: 'side_right', label: 'Right Side', required: true },
  { key: 'interior', label: 'Interior', required: false },
  { key: 'engine', label: 'Engine Bay', required: false },
  { key: 'detail', label: 'Detail Shots', required: false },
] as const;

// Vehicle Makes (Sample - would be fetched from API in real app)
export const VEHICLE_MAKES = [
  'Acura', 'Audi', 'BMW', 'Chevrolet', 'Chrysler', 'Dodge', 'Ford',
  'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jeep', 'Kia', 'Lexus',
  'Mazda', 'Mercedes-Benz', 'Nissan', 'Subaru', 'Tesla', 'Toyota',
  'Volkswagen', 'Volvo'
] as const;

// Common Vehicle Features
export const VEHICLE_FEATURES = [
  'Air Conditioning',
  'All-Wheel Drive',
  'Backup Camera',
  'Bluetooth',
  'Cruise Control',
  'GPS Navigation',
  'Heated Seats',
  'Leather Seats',
  'Moonroof/Sunroof',
  'Premium Sound System',
  'Push Start',
  'Remote Start',
  'Third Row Seating',
  'Tow Package',
] as const;

// Analysis Confidence Levels
export const CONFIDENCE_LEVELS = {
  HIGH: { min: 80, label: 'High Confidence' },
  MEDIUM: { min: 60, label: 'Medium Confidence' },
  LOW: { min: 0, label: 'Low Confidence' },
} as const; 