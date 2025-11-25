'use client';

import Image from 'next/image';
import Link from 'next/link';
import './Hero.css';

interface HeroProps {
  imagePath?: string;
}

export function Hero({ imagePath = '/images/hero/hero_1.jpg' }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-background">
        <Image src={imagePath} alt="Hero background" fill priority className="hero-image" sizes="100vw" quality={90} />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <div className="hero-announcement">
          <span>Announcing our next round of funding.</span>
          <Link href="#" className="hero-announcement-link">
            Read more →
          </Link>
        </div>
        <h1 className="hero-title">Data to enrich your online business</h1>
        <p className="hero-subtitle">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat.
        </p>
        <div className="hero-ctas">
          <Link href="#" className="hero-cta-primary">
            Get started
          </Link>
          <Link href="#" className="hero-cta-secondary">
            Learn more →
          </Link>
        </div>
      </div>
    </section>
  );
}
