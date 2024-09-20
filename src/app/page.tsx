import CarousselSection from "@/components/Caroussel/CarousselSection";
import HeroSection from "@/components/hero-section/HeroSection";
import CustomNavbar from "@/components/navbar/Navbar";

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

      <div className="mt-auto">
        <h1 className="font-bold text-5xl text-center">
          Turn your growth into Squaree
        </h1>
      </div>

      <footer className=""></footer>
    </div>
  );
}
