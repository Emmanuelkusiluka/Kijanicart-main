import { HeroSplit } from "../components/HeroSplit";
import { ProductsCircle } from "../components/ProductsCircle";
import { InteractiveFeatures } from "../components/InteractiveFeatures";
import { FloatingCTA } from "../components/FloatingCTA";
import type { PageType } from "../App";

interface HomePageProps {
  onNavigate: (page: PageType, data?: any) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <HeroSplit onNavigate={onNavigate} />
      <ProductsCircle onNavigate={onNavigate} />
      <InteractiveFeatures onNavigate={onNavigate} />
      <FloatingCTA onNavigate={onNavigate} />
    </>
  );
}
