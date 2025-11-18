'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import './Navigation.css';

interface NavItem {
  title: string;
  href: string;
  description?: string;
}

const navigationItems: NavItem[] = [
  {
    title: 'خانه',
    href: '/',
    description: 'رفتن به صفحه اصلی',
  },
];

export function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation-brand">
          <Link href="/" className="navigation-brand-link">
            همبازی ایونت
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href={item.href}>{item.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
