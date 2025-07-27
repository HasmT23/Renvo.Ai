// User Types
export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Vehicle Types
export interface Vehicle {
  id: string;
  userId: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
  color: string;
  vin?: string;
  condition: VehicleCondition;
  features: string[];
  photos: VehiclePhoto[];
  createdAt: Date;
  updatedAt: Date;
}

export interface VehiclePhoto {
  id: string;
  url: string;
  thumbnailUrl?: string;
  caption?: string;
  isPrimary: boolean;
  order: number;
  uploadedAt: Date;
}

export enum VehicleCondition {
  EXCELLENT = 'excellent',
  GOOD = 'good', 
  FAIR = 'fair',
  POOR = 'poor'
}

// AI Analysis Types
export interface AIAnalysis {
  id: string;
  vehicleId: string;
  recommendedPrice: PriceRecommendation;
  marketInsights: MarketInsights;
  listingOptimization: ListingOptimization;
  photoAnalysis: PhotoAnalysis[];
  confidence: number;
  analysisDate: Date;
}

export interface PriceRecommendation {
  suggestedPrice: number;
  priceRange: {
    min: number;
    max: number;
  };
  reasoning: string[];
  marketComparisons: MarketComparison[];
}

export interface MarketInsights {
  avgMarketPrice: number;
  demandLevel: 'high' | 'medium' | 'low';
  timeToSell: number; // days
  competitorCount: number;
  seasonalTrends: string[];
}

export interface ListingOptimization {
  titleSuggestions: string[];
  descriptionSuggestions: string[];
  keywordRecommendations: string[];
  photoSuggestions: string[];
}

export interface PhotoAnalysis {
  photoId: string;
  quality: 'excellent' | 'good' | 'fair' | 'poor';
  issues: string[];
  suggestions: string[];
  angle: PhotoAngle;
}

export enum PhotoAngle {
  FRONT = 'front',
  REAR = 'rear',
  SIDE_LEFT = 'side_left',
  SIDE_RIGHT = 'side_right',
  INTERIOR = 'interior',
  ENGINE = 'engine',
  DETAIL = 'detail'
}

export interface MarketComparison {
  vehicleId: string;
  price: number;
  mileage: number;
  condition: VehicleCondition;
  similarity: number;
  source: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Navigation Types
export type RootStackParamList = {
  AuthGateway: undefined;
  Main: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Settings: undefined;
};

// Form Types
export interface VehicleFormData {
  make: string;
  model: string;
  year: number;
  mileage: number;
  color: string;
  vin?: string;
  condition: VehicleCondition;
  features: string[];
}

// Settings Types
export interface AppSettings {
  notifications: NotificationSettings;
  privacy: PrivacySettings;
  preferences: UserPreferences;
}

export interface NotificationSettings {
  pushEnabled: boolean;
  emailEnabled: boolean;
  analysisComplete: boolean;
  priceAlerts: boolean;
  marketUpdates: boolean;
}

export interface PrivacySettings {
  profileVisible: boolean;
  dataSharing: boolean;
  analyticsOptIn: boolean;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  currency: string;
  units: 'metric' | 'imperial';
} 