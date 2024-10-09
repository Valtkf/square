import React from "react";

export default function BilledSection() {
  return (
    <div className="flex justify-center items-center gap-x-4 mt-20">
      <h1 className="text-5xl font-bold">Billed Monthly</h1>
      <label className="inline-flex items-center cursor-pointer mt-2">
        <input type="checkbox" value="" className="sr-only peer" checked />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#F2B53C]"></div>
        <span className="ms-3 text-xl font-regular text-[#242424] dark:text-gray-300">
          Billed Yearly (save 15%)
        </span>
      </label>
    </div>
  );
}
