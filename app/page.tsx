
import { FaqSimple } from '@/components/FaqPage/FaqSimple';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderMenu } from '@/components/Header/Header';
import { HeroImageBackground } from '@/components/HeroHome1/HeroHome1';
import { CardsCarousel } from '@/components/LocationCarousels/LocationCarousels';
import { TestimonyPage } from '@/components/TestimonyPage/TestimonyPage';
import { FooterLinks } from '@/components/FooterLinks/FooterLinks';

export default function HomePage() {
  return (
    <>
      <HeaderMenu />
      <HeroImageBackground />
      <CardsCarousel />
      <TestimonyPage />
      <FaqSimple />
      <FooterLinks />
    </>
  );
}
