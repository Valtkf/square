import React from "react";
import NumberTickerDemo from "./NumbersAnimation";
import Charts from "../ui/icons/Charts";
import ButtonExploreWay from "./ButtonExploreWay";
import AnimationRevealSection from "../ui/animations/AnimationRevealSection";

export default function ChartsSection() {
  return (
    <div>
      <AnimationRevealSection>
        <h1 className="mt-32 font-bold text-5xl text-center">
          Turn your growth into Squaree
        </h1>
        <p className="mt-10 font-semibold text-lg text-[#626262] text-center max-w-2xl mx-auto">
          The expectation that productivity should always lead to tangible
          results or accomplishments & notion that certain types of work or
          activities are more valuable or productive than others.
        </p>

        <div className="mt-20 mb-20 flex justify-center">
          <Charts />
        </div>
        <div className="flex flex-col items-center space-y-12">
          <NumberTickerDemo />
          <div className="font-medium text-md text-[#626262] grid grid-cols-3 gap-6 text-center flex-wrap">
            <p>Increase in new pipeline generated</p>
            <p>Increase in form workforce</p>
            <p>Decrease in cost per lead</p>
          </div>
        </div>
        <ButtonExploreWay />
      </AnimationRevealSection>
    </div>
  );
}
