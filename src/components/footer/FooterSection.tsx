import React from "react";
import SquareeIcon from "../ui/icons/SquareeIcon";

export default function FooterSection() {
  return (
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
  );
}
