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
        "relative overflow-hidden mx-20 flex items-center bg-linear-to-r from-[#031E2A] to-[#000D12] rounded-3xl",
        className,
      )}
    >
      <div className="flex flex-col w-151.75 my-28 mx-16 z-10">
        <h2 className="text-5xl leading-[120%]">{title}</h2>
        <p className="text-base leading-[130%] mt-8 w-115.5 font-light text-gray">
          {desc}
        </p>
      </div>
      <div className="flex mt-13 gap-5 z-10">
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
