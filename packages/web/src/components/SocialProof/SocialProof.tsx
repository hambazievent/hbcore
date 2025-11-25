'use client';

import { TestimonialCarousel } from '@/components/TestimonialCarousel/TestimonialCarousel';
import { useTranslation } from '@/i18n/useTranslation';
import './SocialProof.css';

interface Testimonial {
  company: string;
  avatar: string;
  name: string;
  role: string;
  review: string;
}

export function SocialProof() {
  const { t } = useTranslation();

  // Sample testimonial data based on screenshot
  const testimonials: Testimonial[] = [
    {
      company: 'vercel',
      avatar: 'guillermo-rauch.jpg',
      name: t.socialProof.testimonials.testimonial1.name,
      role: t.socialProof.testimonials.testimonial1.role,
      review: t.socialProof.testimonials.testimonial1.review,
    },
  ];

  return (
    <section id="social-proof" className="social-proof">
      <TestimonialCarousel
        testimonials={testimonials}
        companyLogoPath="/images/testimonials/companies/"
        avatarPath="/images/testimonials/avatars/"
      />
    </section>
  );
}
