/**
 * Design Tokens
 * Centralized design system tokens for colors, spacing, typography, etc.
 */

export const designTokens = {
  colors: {
    // Brand colors - Orange/Red palette (#F2613F, #9B3922, #481E14)
    brand: {
      50: '#FEF2F0',
      100: '#FDE0D9',
      200: '#FBC1B3',
      300: '#F8A28D',
      400: '#F2613F', // Coral Orange - Primary brand color
      500: '#9B3922', // Burnt Orange - Main brand color
      600: '#7D2E1B',
      700: '#5F2314',
      800: '#481E14', // Dark Reddish-Brown
      900: '#2F140D',
      950: '#1A0A07',
    },
    // Accent colors - Variations of brand colors for accents
    accent: {
      50: '#FEF2F0',
      100: '#FDE0D9',
      200: '#FBC1B3',
      300: '#F8A28D',
      400: '#F2613F', // Coral Orange
      500: '#9B3922', // Burnt Orange
      600: '#7D2E1B',
      700: '#5F2314',
      800: '#481E14', // Dark Reddish-Brown
      900: '#2F140D',
      950: '#1A0A07',
    },
    // Neutral colors - Black (#0C0C0C) based grayscale
    neutral: {
      50: '#F5F5F5',
      100: '#E5E5E5',
      200: '#CCCCCC',
      300: '#B3B3B3',
      400: '#999999',
      500: '#808080',
      600: '#666666',
      700: '#4D4D4D',
      800: '#333333',
      900: '#1A1A1A',
      950: '#0C0C0C', // Black
    },
  },
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
    '4xl': '6rem', // 96px
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem', // 2px
    md: '0.375rem', // 6px
    lg: '0.5rem', // 8px
    xl: '0.75rem', // 12px
    '2xl': '1rem', // 16px
    full: '9999px',
  },
  typography: {
    fontFamily: {
      primary: 'var(--font-rubik)',
      body: 'var(--font-vazirmatn)',
      mono: 'var(--font-geist-mono)',
      sans: 'var(--font-vazirmatn)', // Alias for body font
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  },
  transitions: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
} as const;

export type DesignTokens = typeof designTokens;
