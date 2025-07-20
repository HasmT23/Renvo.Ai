export { colors } from './colors';
export { typography } from './typography';
export { spacing } from './spacing';

// Common reusable styles
export const commonStyles = {
  container: {
    flex: 1,
    padding: 20,
  },
  centerContent: {
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  row: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
}; 