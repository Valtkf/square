import React from "react";

export default function Card() {
  return (
    <div className="flex justify-center gap-x-8 mt-20">
      <div className="p-8 flex flex-col justify-between items-start border border-[#3E3E3E] border-opacity-15 w-full max-w-md h-[567px] rounded-[20px] bg-slate-300 bg-opacity-20">
        <div className="flex-grow">
          <h1 className="text-4xl font-bold mb-2">free</h1>
          <h2 className="text-4xl font-bold mb-6">$0</h2>
          <p className="text-lg text-[#242424] border-b border-[#4D4D4D] pb-6 mb-4">
            Description of the tier list will go here, copy should be concise
            and impactful.
          </p>
          <ol className="text-lg">
            <li>• Access to All Features</li>
            <li>• 20% discount on backorders</li>
            <li>• Domain Name Appraisal </li>
            <li>• 10 Social Profiles</li>
          </ol>
        </div>
        <button className="w-full max-w-[432px] text-lg font-regular text-white bg-[#F2B53C] hover:bg-[#ffc756] duration-200 h-[56px] rounded-3xl">
          Try for Free
        </button>
      </div>

      <div className="p-8 flex flex-col justify-between items-start border border-[#F2B53C] w-full max-w-md h-[708px] rounded-[20px] bg-slate-300 bg-opacity-20">
        <div className="flex-grow">
          <h1 className="text-4xl font-bold mb-2">Pro</h1>
          <h2 className="text-4xl font-bold mb-6">
            $12 <span className="text-base">/ month</span>{" "}
          </h2>
          <p className="text-lg text-[#242424] border-b border-[#4D4D4D] pb-6 mb-4">
            Description of the tier list will go here, copy should be concise
            and impactful.
          </p>
          <ol className="text-lg">
            <li>• Access to All Features</li>
            <li>• 20% discount on backorders</li>
            <li>• Domain Name Appraisal </li>
            <li>• 10 Social Profiles</li>
            <li>• Calendar View</li>
            <li>• 24/7 Support</li>
          </ol>
        </div>
        <button className="w-full max-w-[432px] text-lg font-regular text-white bg-[#F2B53C] hover:bg-[#ffc756] duration-200 h-[56px] rounded-3xl">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
