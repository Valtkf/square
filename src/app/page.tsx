import CarousselSection from "@/components/caroussel/CarousselSection";
import ChartsSection from "@/components/charts/ChartsSection";
import HeroSection from "@/components/hero-section/HeroSection";
import CustomNavbar from "@/components/navbar/Navbar";
import Productivity from "@/components/productivity/Productivity";
import TechnicalStack from "@/components/technical-stack/TechnicalStack";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20">
      <header>
        <div className="flex justify-center items-center">
          <CustomNavbar />
        </div>
      </header>

      <main className="flex-grow">
        <div className="flex flex-col justify-center items-center">
          <HeroSection />
          <CarousselSection />
        </div>
      </main>
      <ChartsSection />
      <Productivity />
      <TechnicalStack />
      <footer className=""></footer>
    </div>
  );
}
