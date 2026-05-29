import { Button } from "@/components/ui/button";
import Image from "next/image";

const trusted = [
  { id: 1, logo: "logos/shells.svg", label: "", width: 72 },
  { id: 2, logo: "logos/smartfinder.svg", label: "", width: 100 },
  { id: 3, logo: "logos/zoomerr.svg", label: "", width: 78 },
  { id: 4, logo: "logos/artvenue.svg", label: "", width: 96 },
  { id: 5, logo: "logos/kontrastr.svg", label: "", width: 76 },
  { id: 6, logo: "logos/wavesmarathon.svg", label: "", width: 106 },
];

export default function SectionOne() {
  return (
    <section className="mx-8 sm:mx-0 mt-42 lg:mt-52.5">
      <div className="flex lg:justify-between">
        <div className="sm:w-108 xl:w-146 mx-auto  sm:mx-12 lg:mx-16 xl:mx-20">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-[120%]">
            The new foundation of modern banking
          </h1>
          <p className="text-sm lg:text-base leading-[130%] mt-4 w-89 font-light text-gray">
            We drive innovation and growth, provide seamless customer experience
            and operational excellence
          </p>
          <div className="flex mt-13 gap-5">
            <Button size="lg">REQUEST DEMO</Button>
            <Button variant="secondary" size={"lg"}>
              CONTACT US
            </Button>
          </div>
        </div>
        <div className="hidden sm:flex lg:h-99.5 relative items-center">
          <div className="absolute bg-linear-to-r from-light-blue to-blue blur-[100px] h-full rounded-full w-99.5 left-[45%] -translate-x-1/2" />
          <div className="w-120 xl:w-140.5 h-60 xl:h-75.25 relative">
            <Image src="/images/section-1.png" alt="" fill />
          </div>
        </div>
      </div>
      <h5 className="mt-12 mx-auto sm:mx-12 lg:mx-20 font-light text-gray">Trusted By:</h5>
      <div className="flex flex-wrap gap-4 mx-auto sm:mx-12 lg:mx-20 mt-4">
        {trusted.map((items) => (
          <Image
            key={items.id}
            src={items.logo}
            height={18}
            width={items.width}
            alt={items.label}
          />
        ))}
      </div>
    </section>
  );
}
