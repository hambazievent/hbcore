import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

interface FeatureProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  isLoading?: boolean;
}

export function Feature({ iconSrc, iconAlt, title, description, isLoading = false }: FeatureProps) {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        {isLoading ? (
          <Skeleton className="feature-icon-skeleton" />
        ) : (
          <Image src={iconSrc} alt={iconAlt} width={96} height={96} className="feature-icon-image" />
        )}
      </div>
      <h3 className="feature-title">{isLoading ? <Skeleton className="h-6 w-32 mb-2" /> : title}</h3>
      <div className="feature-description">
        {isLoading ? (
          <>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </>
        ) : (
          description
        )}
      </div>
    </div>
  );
}
