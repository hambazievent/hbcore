import type { LucideIcon } from 'lucide-react';
import { Home, Lock, Network, Rocket, ShoppingBasket } from 'lucide-react';

/**
 * Navigation item configuration
 */
export interface NavItemConfig {
  to?: string;
  translationKey: string;
  icon: LucideIcon;
  disabled?: boolean;
}

/**
 * Bottom navigation items configuration
 * Centralized constants for bottom navigation bar
 */
export const BOTTOM_NAV_ITEMS: NavItemConfig[] = [
  {
    to: '/',
    translationKey: 'common.home',
    icon: Home,
  },
  {
    to: '/shop',
    translationKey: 'common.shop',
    icon: ShoppingBasket,
  },
  {
    to: '/events',
    translationKey: 'common.events',
    icon: Rocket,
  },
  {
    to: '/network',
    translationKey: 'common.network',
    icon: Network,
  },
  {
    translationKey: 'common.comingSoon',
    icon: Lock,
    disabled: true,
  },
] as const;
