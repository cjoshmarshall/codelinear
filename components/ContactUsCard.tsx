import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function ContactUsCard({
  title,
  desc,
  image,
  className,
  imageClassName,
}: {
  title: string;
  desc: string;
  image?: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={cn(
        "py-16 md:py-28 relative overflow-hidden mx-auto md:mx-16 xl:mx-20 flex flex-col md:flex-row items-center bg-linear-to-r from-[#031E2A] to-[#000D12] rounded-3xl",
        className,
      )}
    >
      <div className="flex flex-col mx-12 xl:mx-16 z-10 flex-1/2">
        <h2 className="text-4xl xl:text-5xl leading-[120%]">{title}</h2>
        <p className="text-sm xl:text-base leading-[130%] mt-8 font-light text-gray">
          {desc}
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-auto px-8 md:px-0 mt-13 mx-8 gap-5 z-10 flex-1/2">
        <Button variant="secondary" size={"lg"}>
          CONTACT US
        </Button>
        <Button size="lg">REQUEST DEMO</Button>
      </div>
      {image ? (
        <div className={cn("absolute w-5/6 h-110 right-0", imageClassName)}>
          <Image src={image} alt="" fill />
        </div>
      ) : undefined}
    </div>
  );
}
