import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderMenu } from '@/components/Header/Header';
import { HeroImageBackground } from '@/components/HeroHome1/HeroHome1';
import { CardsCarousel } from '@/components/LocationCarousels/LocationCarousels';

export default function HomePage() {
  return (
    <>
      <HeaderMenu />
      <HeroImageBackground />
      <CardsCarousel />
    </>
  );
}
