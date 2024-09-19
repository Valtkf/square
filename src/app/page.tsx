import CustomNavbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="items-center justify-center min-h-screen p-8 pb-20 ">
      <main className="">
        <div>
          <div className="flex justify-center items-center">
            <CustomNavbar />
          </div>
          <h1>Hello</h1>
          <div>
            <Button>Click me</Button>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
