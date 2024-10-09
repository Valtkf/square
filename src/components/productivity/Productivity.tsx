import Image from "next/image";
import React from "react";
import FadeInAnimation from "../ui/animations/FadeInAnimation";

export default function Productivity() {
  return (
    <div className="flex justify-between items-center mt-28 gap-x-16 mr-10 ml-10 max-md:flex-col ">
      <div className="flex flex-col justify-start max-md:gap-y-10">
        <FadeInAnimation>
          <h1 className="font-bold text-5xl">
            Know your productivity by squaree
          </h1>
          <p className="font-semibold text-lg text-[#626262] max-md:mb-10">
            The expectation that productivity should always lead to tangible
            results or accomplishments.
          </p>
        </FadeInAnimation>
      </div>
      <FadeInAnimation>
        <Image
          src="/images/Productivity.png"
          alt="Company 1"
          width={559}
          height={402}
        />
      </FadeInAnimation>
    </div>
  );
}
