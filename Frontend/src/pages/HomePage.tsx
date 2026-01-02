import { HeroSplit } from "../components/HeroSplit";
import { ProductsCircle } from "../components/ProductsCircle";
import { InteractiveFeatures } from "../components/InteractiveFeatures";
import { FloatingCTA } from "../components/FloatingCTA";

export function HomePage() {
  return (
    <>
      <HeroSplit />
      <ProductsCircle />
      <InteractiveFeatures />
      <FloatingCTA />
    </>
  );
}
