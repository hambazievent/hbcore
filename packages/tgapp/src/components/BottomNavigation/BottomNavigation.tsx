import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BOTTOM_NAV_ITEMS } from '@/config/navigation.constants';

export function BottomNavigation() {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = BOTTOM_NAV_ITEMS;

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-background border-t border-border z-50">
      <div className="flex justify-around items-center py-2 max-w-full">
        {navItems.map((item) => {
          const isActive = item.to ? location.pathname === item.to : false;
          const Icon = item.icon;
          const content = (
            <div className="flex flex-col items-center justify-center gap-1">
              <Icon
                className={`w-6 h-6 transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                } ${item.disabled ? 'opacity-50' : ''}`}
              />
              <span
                className={`text-xs font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                } ${item.disabled ? 'opacity-50' : ''}`}
              >
                {t(item.translationKey)}
              </span>
            </div>
          );

          if (item.disabled) {
            return (
              <Button
                key={item.translationKey}
                variant="ghost"
                disabled
                className="flex-1 flex flex-col items-center justify-center p-2 min-h-16 rounded-none bg-transparent hover:bg-accent/10 cursor-not-allowed"
              >
                {content}
              </Button>
            );
          }

          if (!item.to) {
            return null;
          }

          return (
            <Button
              key={item.to}
              asChild
              variant="ghost"
              className="flex-1 flex flex-col items-center justify-center p-2 min-h-16 rounded-none bg-transparent hover:bg-accent/10"
            >
              <Link to={item.to}>{content}</Link>
            </Button>
          );
        })}
      </div>
    </nav>
  );
}
