import NumberTicker from "../ui/magicui/number-ticker";

const NumberTickerDemo = () => {
  return (
    <div className="flex justify-center items-center md:gap-32 text-6xl font-bold tracking-tighter text-black dark:text-white">
      <div className="flex flex-col items-center">
        <NumberTicker value={200} />
      </div>
      <div className="flex flex-col items-center">
        <NumberTicker value={70} />
      </div>
      <div className="flex flex-col items-center">
        <NumberTicker value={40} />
      </div>
    </div>
  );
};

export default NumberTickerDemo;
