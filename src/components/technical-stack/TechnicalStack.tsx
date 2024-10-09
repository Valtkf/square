import Image from "next/image";
import React from "react";
import SlideInAnimation from "../ui/animations/SlideInAnimation";

export default function TechnicalStack() {
  return (
    <div className="flex justify-between items-center mt-28 gap-x-20">
      <SlideInAnimation direction="right">
        <Image
          src="/images/TechStack.png"
          alt="Company 1"
          width={559}
          height={402}
        />
      </SlideInAnimation>
      <div className="flex flex-col justify-end">
        <SlideInAnimation direction="left">
          <h1 className="font-bold text-5xl">
            Seamless integration with best apps
          </h1>
          <p className="font-semibold text-lg text-[#626262]">
            What ever you use, we integrate with the best of best
          </p>
        </SlideInAnimation>
      </div>
    </div>
  );
}
