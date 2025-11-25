'use client';

import Image from 'next/image';
import * as React from 'react';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import './TestimonialCarousel.css';

interface Testimonial {
  company: string;
  avatar: string;
  name: string;
  role: string;
  review: string;
}

interface TestimonialCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[];
  companyLogoPath?: string;
  avatarPath?: string;
}

export const TestimonialCarousel = React.forwardRef<HTMLDivElement, TestimonialCarouselProps>(
  ({ className, testimonials, companyLogoPath = '', avatarPath = '', ...props }, ref) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
      if (!api) return;

      api.on('select', () => {
        setCurrent(api.selectedScrollSnap());
      });
    }, [api]);

    return (
      <div ref={ref} className={cn('testimonial-carousel', className)} {...props}>
        <Carousel setApi={setApi} className="testimonial-carousel-container">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.company} className="testimonial-carousel-item">
                <div className="testimonial-company-logo">
                  <Image
                    src={`${companyLogoPath}${testimonial.company}.svg`}
                    alt={`${testimonial.company} logo`}
                    fill
                    className="testimonial-company-logo-image"
                    draggable={false}
                  />
                </div>
                <p className="testimonial-review">{testimonial.review}</p>
                <h5 className="testimonial-name">{testimonial.name}</h5>
                <h5 className="testimonial-role">{testimonial.role}</h5>
                <div className="testimonial-avatar">
                  <Image
                    src={`${avatarPath}${testimonial.avatar}`}
                    alt={testimonial.name}
                    fill
                    className="testimonial-avatar-image"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="testimonial-pagination">
          <div className="testimonial-pagination-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn('testimonial-pagination-dot', index === current && 'testimonial-pagination-dot-active')}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  },
);

TestimonialCarousel.displayName = 'TestimonialCarousel';
