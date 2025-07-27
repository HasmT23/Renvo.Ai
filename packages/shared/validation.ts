import { VALIDATION, VEHICLE_CONFIG } from './constants';
import { VehicleFormData, VehicleCondition } from './types';

// Basic validation functions
export const isValidEmail = (email: string): boolean => {
  return VALIDATION.email.pattern.test(email);
};

export const isValidVIN = (vin: string): boolean => {
  return VALIDATION.vin.pattern.test(vin);
};

export const isValidPhone = (phone: string): boolean => {
  return VALIDATION.phone.pattern.test(phone);
};

// Vehicle validation
export const validateVehicleYear = (year: number): { isValid: boolean; error?: string } => {
  if (!year || isNaN(year)) {
    return { isValid: false, error: 'Year is required' };
  }
  
  if (year < VEHICLE_CONFIG.minYear || year > VEHICLE_CONFIG.maxYear) {
    return { 
      isValid: false, 
      error: `Year must be between ${VEHICLE_CONFIG.minYear} and ${VEHICLE_CONFIG.maxYear}` 
    };
  }
  
  return { isValid: true };
};

export const validateMileage = (mileage: number): { isValid: boolean; error?: string } => {
  if (mileage < 0) {
    return { isValid: false, error: 'Mileage cannot be negative' };
  }
  
  if (mileage > VEHICLE_CONFIG.maxMileage) {
    return { isValid: false, error: 'Mileage is too high' };
  }
  
  return { isValid: true };
};

export const validateVehicleCondition = (condition: string): { isValid: boolean; error?: string } => {
  const validConditions = Object.values(VehicleCondition);
  
  if (!validConditions.includes(condition as VehicleCondition)) {
    return { isValid: false, error: 'Invalid vehicle condition' };
  }
  
  return { isValid: true };
};

// Form validation
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const validateVehicleForm = (data: Partial<VehicleFormData>): ValidationResult => {
  const errors: Record<string, string> = {};

  // Required fields
  if (!data.make?.trim()) {
    errors.make = 'Make is required';
  }

  if (!data.model?.trim()) {
    errors.model = 'Model is required';
  }

  if (!data.year) {
    errors.year = 'Year is required';
  } else {
    const yearValidation = validateVehicleYear(data.year);
    if (!yearValidation.isValid) {
      errors.year = yearValidation.error!;
    }
  }

  if (data.mileage === undefined || data.mileage === null) {
    errors.mileage = 'Mileage is required';
  } else {
    const mileageValidation = validateMileage(data.mileage);
    if (!mileageValidation.isValid) {
      errors.mileage = mileageValidation.error!;
    }
  }

  if (!data.color?.trim()) {
    errors.color = 'Color is required';
  }

  if (!data.condition) {
    errors.condition = 'Condition is required';
  } else {
    const conditionValidation = validateVehicleCondition(data.condition);
    if (!conditionValidation.isValid) {
      errors.condition = conditionValidation.error!;
    }
  }

  // Optional VIN validation
  if (data.vin && data.vin.trim() && !isValidVIN(data.vin)) {
    errors.vin = VALIDATION.vin.message;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Email validation with error message
export const validateEmail = (email: string): { isValid: boolean; error?: string } => {
  if (!email?.trim()) {
    return { isValid: false, error: 'Email is required' };
  }
  
  if (!isValidEmail(email)) {
    return { isValid: false, error: VALIDATION.email.message };
  }
  
  return { isValid: true };
};

// Password validation
export const validatePassword = (password: string): { isValid: boolean; error?: string } => {
  if (!password) {
    return { isValid: false, error: 'Password is required' };
  }
  
  if (password.length < 6) {
    return { isValid: false, error: 'Password must be at least 6 characters' };
  }
  
  return { isValid: true };
};

// File validation for photo uploads
export const validatePhotoFile = (file: {
  size: number;
  type: string;
  name: string;
}): { isValid: boolean; error?: string } => {
  // Check file size (10MB limit)
  if (file.size > 10 * 1024 * 1024) {
    return { isValid: false, error: 'File size must be less than 10MB' };
  }
  
  // Check file type
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/heic'];
  if (!allowedTypes.includes(file.type.toLowerCase())) {
    return { isValid: false, error: 'Only JPEG, PNG, and HEIC files are allowed' };
  }
  
  return { isValid: true };
};

// Generic form field validation
export const validateRequired = (value: any, fieldName: string): { isValid: boolean; error?: string } => {
  if (value === null || value === undefined || value === '') {
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  if (typeof value === 'string' && !value.trim()) {
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  return { isValid: true };
};

// String length validation
export const validateLength = (
  value: string, 
  min: number, 
  max: number, 
  fieldName: string
): { isValid: boolean; error?: string } => {
  if (!value) {
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  if (value.length < min) {
    return { isValid: false, error: `${fieldName} must be at least ${min} characters` };
  }
  
  if (value.length > max) {
    return { isValid: false, error: `${fieldName} must be less than ${max} characters` };
  }
  
  return { isValid: true };
};

// Number range validation
export const validateRange = (
  value: number, 
  min: number, 
  max: number, 
  fieldName: string
): { isValid: boolean; error?: string } => {
  if (value === null || value === undefined || isNaN(value)) {
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  if (value < min) {
    return { isValid: false, error: `${fieldName} must be at least ${min}` };
  }
  
  if (value > max) {
    return { isValid: false, error: `${fieldName} must be less than ${max}` };
  }
  
  return { isValid: true };
}; 