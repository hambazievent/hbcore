/**
 * Theme utilities
 * Functions for managing theme and color system
 */

import { designTokens } from './design-tokens';

export type ColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

export type ColorPalette = 'brand' | 'accent' | 'neutral';

/**
 * Get a color from the design tokens
 */
export function getColor(palette: ColorPalette, scale: ColorScale): string {
  return designTokens.colors[palette][scale];
}

/**
 * Get CSS variable name for a color
 */
export function getColorVariable(palette: ColorPalette, scale: ColorScale): string {
  return `--color-${palette}-${scale}`;
}

/**
 * Theme configuration
 */
export const themeConfig = {
  light: {
    background: designTokens.colors.neutral[50],
    foreground: designTokens.colors.neutral[950],
    primary: designTokens.colors.brand[500], // Burnt Orange
    primaryForeground: designTokens.colors.neutral[50],
    secondary: designTokens.colors.neutral[100],
    secondaryForeground: designTokens.colors.neutral[900],
    accent: designTokens.colors.accent[400], // Coral Orange
    accentForeground: designTokens.colors.neutral[50],
    muted: designTokens.colors.neutral[100],
    mutedForeground: designTokens.colors.neutral[800],
    border: designTokens.colors.neutral[200],
    input: designTokens.colors.neutral[200],
    ring: designTokens.colors.brand[500],
  },
  dark: {
    background: designTokens.colors.neutral[950], // Black
    foreground: designTokens.colors.neutral[50],
    primary: designTokens.colors.brand[500], // Burnt Orange
    primaryForeground: designTokens.colors.neutral[50],
    secondary: designTokens.colors.neutral[800],
    secondaryForeground: designTokens.colors.neutral[50],
    accent: designTokens.colors.accent[400], // Coral Orange
    accentForeground: designTokens.colors.neutral[50],
    muted: designTokens.colors.neutral[800],
    mutedForeground: designTokens.colors.neutral[300],
    border: designTokens.colors.neutral[700],
    input: designTokens.colors.neutral[700],
    ring: designTokens.colors.brand[400],
  },
} as const;

export type ThemeMode = keyof typeof themeConfig;
