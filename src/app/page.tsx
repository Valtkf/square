import Card from "@/components/card/Card";
import CarousselSection from "@/components/caroussel/CarousselSection";
import ChartsSection from "@/components/charts/ChartsSection";
import HeroSection from "@/components/hero-section/HeroSection";
import CustomNavbar from "@/components/navbar/Navbar";
import Productivity from "@/components/productivity/Productivity";
import TechnicalStack from "@/components/technical-stack/TechnicalStack";
import Testimonial from "@/components/testimonial/Testimonial";
import SquareeIcon from "@/components/ui/icons/SquareeIcon";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-8 pb-20">
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
        <Testimonial />
        <div className="flex justify-center items-center gap-x-4">
          <h1 className="text-5xl font-bold mt-10">Billed Monthly</h1>
          <label className="inline-flex items-center cursor-pointer mt-12">
            <input type="checkbox" value="" className="sr-only peer" checked />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#F2B53C]"></div>
            <span className="ms-3 text-xl font-regular text-[#242424] dark:text-gray-300">
              Billed Yearly (save 15%)
            </span>
          </label>
        </div>
        <Card />
      </div>
      <footer className="flex justify-center w-full bg-[#F6F8FF] py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center sm:items-start">
              <SquareeIcon />
              <p className="text-sm text-center sm:text-left mt-4 max-w-[200px]">
                What matters is productivity with fun culture
              </p>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <h2 className="font-semibold mb-2">About</h2>
              <p className="mb-1">Contact</p>
              <p className="mb-1">Blog</p>
              <p className="mb-1">Story</p>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <h2 className="font-semibold mb-2">Company</h2>
              <p className="mb-1">Product</p>
              <p className="mb-1">Press</p>
              <p className="mb-1">More</p>
            </div>

            <div className="flex flex-col items-center sm:items-start w-full">
              <div className="border border-[#DDDDDD] rounded-2xl p-4 w-full max-w-[405px]">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
                      Follow us on twitter
                    </h1>
                    <p className="font-medium text-sm text-[#868898] text-center sm:text-left">
                      notion.com
                    </p>
                  </div>
                  <button className="w-full sm:w-[102px] h-[56px] text-lg font-regular text-white bg-[#F2B53C] hover:bg-[#ffc756] duration-200 rounded-xl">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
