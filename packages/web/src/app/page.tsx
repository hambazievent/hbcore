import { FeaturesAndBenefits } from '@/components/FeaturesAndBenefits/FeaturesAndBenefits';
import { Hero } from '@/components/Hero/Hero';
import { SocialProof } from '@/components/SocialProof/SocialProof';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesAndBenefits />
      <SocialProof />
    </>
  );
}
