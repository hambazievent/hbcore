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

const navigationItems = [
  { title: 'Product', href: '#' },
  { title: 'Features', href: '#' },
  { title: 'Marketplace', href: '#' },
  { title: 'Company', href: '#' },
];

export function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation-brand">
          <Link href="#" className="navigation-brand-link">
            Logo
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href={item.href}>{item.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="navigation-login">
          <Link href="#" className="navigation-login-link">
            Log in →
          </Link>
        </div>
      </div>
    </nav>
  );
}
