"use client";

import BilledSection from "@/components/billed/BilledSection";
import Card from "@/components/card/Card";
import CarousselSection from "@/components/caroussel/CarousselSection";
import ChartsSection from "@/components/charts/ChartsSection";
import FooterSection from "@/components/footer/FooterSection";
import HeroSection from "@/components/hero-section/HeroSection";
import CustomNavbar from "@/components/navbar/Navbar";
import Productivity from "@/components/productivity/Productivity";
import TechnicalStack from "@/components/technical-stack/TechnicalStack";
import Testimonial from "@/components/testimonial/Testimonial";
import AnimatedSection from "@/components/ui/animations/AnimatedSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-8 pb-20 w-full">
        <header>
          <div className="flex justify-center items-center w-full">
            <AnimatedSection>
              <CustomNavbar />
            </AnimatedSection>
          </div>
        </header>
        <main className="flex-grow w-full">
          <div className="flex flex-col justify-center items-center w-full">
            <AnimatedSection>
              <HeroSection />
            </AnimatedSection>
            <AnimatedSection>
              <CarousselSection />
            </AnimatedSection>
          </div>
        </main>
        <div className="w-full flex flex-col items-center">
          <ChartsSection />
          <Productivity />
          <TechnicalStack />
          <Testimonial />
          <BilledSection />
          <Card />
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
