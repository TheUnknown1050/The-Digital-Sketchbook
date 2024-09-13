import HeroSection from "./components/HeroSection";
import SketchbookSection from "./components/SketchbookSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />

      <div className="w-full h-32" />

      <SketchbookSection />
    </main>
  );
}
