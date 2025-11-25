'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import { Benefit } from './Benefit';
import './Benefits.css';

const eatingTogetherIllustration = '/components/FeaturesAndBenefits/illustrations/undraw_eating-together_mr7m.svg';
const halloweenIcon = '/components/FeaturesAndBenefits/illustrations/undraw_halloween-2025_o47f.svg';

export function Benefits() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="benefits" className="benefits-section">
      <Benefit
        illustrationSrc={eatingTogetherIllustration}
        illustrationAlt="Eating Together"
        headline={t.featuresAndBenefits.benefits.benefit1.headline}
        paragraph={t.featuresAndBenefits.benefits.benefit1.paragraph}
        bullets={[
          t.featuresAndBenefits.benefits.benefit1.bullet1,
          t.featuresAndBenefits.benefits.benefit1.bullet2,
          t.featuresAndBenefits.benefits.benefit1.bullet3,
          t.featuresAndBenefits.benefits.benefit1.bullet4,
        ]}
        imagePosition="right"
        isLoading={isLoading}
      />
      <Benefit
        illustrationSrc={halloweenIcon}
        illustrationAlt="Halloween"
        headline={t.featuresAndBenefits.benefits.benefit2.headline}
        paragraph={t.featuresAndBenefits.benefits.benefit2.paragraph}
        bullets={[
          t.featuresAndBenefits.benefits.benefit2.bullet1,
          t.featuresAndBenefits.benefits.benefit2.bullet2,
          t.featuresAndBenefits.benefits.benefit2.bullet3,
        ]}
        imagePosition="left"
        isLoading={isLoading}
      />
    </section>
  );
}
