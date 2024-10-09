import Image from "next/image";
import React from "react";
import FadeInAnimation from "../ui/animations/FadeInAnimation";

export default function Testimonial() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <FadeInAnimation>
        <h1 className="text-5xl font-bold">What squaree users say</h1>
        <p className="text-lg text-[#626262] mt-4 mb-10">
          Here is how homely can help you
        </p>
        <Image
          src="/images/testimonial.png"
          alt="testimonial"
          width={609}
          height={452}
        />
      </FadeInAnimation>
    </div>
  );
}
