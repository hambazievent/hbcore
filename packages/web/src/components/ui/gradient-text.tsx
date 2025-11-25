'use client';

import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradientColors?: string[];
  neon?: boolean;
  duration?: number;
}

export function GradientText({
  children,
  className,
  gradientColors = ['#8b5cf6', '#7c3aed', '#6d28d9', '#a78bfa'],
  neon = false,
  duration = 4,
}: GradientTextProps) {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const gradientWidth = 200;
    const animation = animate(x, gradientWidth, {
      duration: duration,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear',
    });

    return () => {
      animation.stop();
    };
  }, [x, duration]);

  const backgroundPosition = useTransform(x, (value) => `${value}% 50%`);

  // Make gradient cyclic by adding the first color at the end
  const cyclicColors = [...gradientColors, gradientColors[0]];
  const gradientString = `linear-gradient(90deg, ${cyclicColors.join(', ')})`;

  return (
    <motion.h1
      ref={containerRef}
      className={cn('relative inline-block', className)}
      style={{
        backgroundImage: gradientString,
        backgroundSize: '200% 100%',
        backgroundPosition: backgroundPosition,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
      {neon && (
        <motion.span
          className="absolute inset-0 blur-xl opacity-50"
          style={{
            backgroundImage: gradientString,
            backgroundSize: '200% 100%',
            backgroundPosition: backgroundPosition,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            mixBlendMode: 'screen',
            zIndex: -1,
          }}
          aria-hidden="true"
        >
          {children}
        </motion.span>
      )}
    </motion.h1>
  );
}
