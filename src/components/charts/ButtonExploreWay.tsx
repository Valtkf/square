import { ArrowRight } from "lucide-react";
import React from "react";

export default function ButtonExploreWay() {
  return (
    <div className="mt-20 flex justify-center">
      <button className="rounded-3xl flex justify-center items-center bg-[#F2B53C] hover:bg-[#f9bf4b] duration-200 text-white w-[203px] h-[56px]">
        Explore our way <ArrowRight />
      </button>
    </div>
  );
}
