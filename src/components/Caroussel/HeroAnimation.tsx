import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    img: "/images/Group 1171274809.png",
  },
  {
    img: "/images/Group 1171274813.png",
  },
  {
    img: "/images/Group 1171274814.png",
  },
  {
    img: "/images/Group 1171274843.png",
  },
  {
    img: "/images/Group 1171274847 (1).png",
  },
];

const firstRow = reviews.slice(reviews.length / 5);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl",

        // dark styles
        " dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="mt-4 flex flex-row justify-center items-center gap-2 p-1">
        <img className="bg-cover w-full " src={img} />
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="flex h-[400px] w-full flex-col items-center justify-center">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard {...review} />
        ))}
      </Marquee>
    </div>
  );
}
