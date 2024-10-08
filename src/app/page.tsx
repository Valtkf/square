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
      <div className="p-8 pb-20">
        <header>
          <div className="flex justify-center items-center">
            <AnimatedSection>
              <CustomNavbar />
            </AnimatedSection>
          </div>
        </header>
        <main className="flex-grow">
          <div className="flex flex-col justify-center items-center">
            <AnimatedSection>
              <HeroSection />
            </AnimatedSection>
            <AnimatedSection>
              <CarousselSection />
            </AnimatedSection>
          </div>
        </main>
        <ChartsSection />
        <Productivity />
        <TechnicalStack />
        <Testimonial />
        <BilledSection />
        <Card />
      </div>
      <FooterSection />
    </div>
  );
}
