import React from "react";
import { MarqueeDemo } from "./HeroAnimation";
import FluidGluIcon from "../ui/icons/FluidGluIcon";
import HikkenoIcon from "../ui/icons/HikkenoIcon";
import BubbleIcon from "../ui/icons/BubbleIcon";
import FadeInAnimation from "../ui/animations/FadeInAnimation";

export default function CarousselSection() {
  return (
    <div>
      <MarqueeDemo />
      <FadeInAnimation>
        <p className="mt-40 text-center font-medium text-xl text-[#626262]">
          We have the fast paced growing companies with us
        </p>
        <div className="flex justify-center items-center lg:space-x-28 mt-14">
          <FluidGluIcon />
          <HikkenoIcon />
          <BubbleIcon />
        </div>
      </FadeInAnimation>
    </div>
  );
}
