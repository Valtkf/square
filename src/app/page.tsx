import HeroSection from "@/components/hero-section/HeroSection";
import CustomNavbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="items-center justify-center min-h-screen p-8 pb-20 ">
      <main className="">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex justify-center items-center">
            <CustomNavbar />
          </div>
          <HeroSection />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
