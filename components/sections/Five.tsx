import Image from "next/image";
import { Button } from "../ui/button";
import LinkButton from "../LinkButton";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPosition,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ContactUsCard from "../ContactUsCard";

const blog = [
  {
    id: 1,
    title: "How to transition from a traditional to a digital bank",
    preTitle: "Getting Started",
    author: "David Grohl",
    date: "17/08/24",
    image: "/images/section-5.png",
  },
  {
    id: 2,
    title: "How to transition from a traditional to a digital bank",
    preTitle: "Getting Started",
    author: "David Grohl",
    date: "17/08/24",
    image: "/images/section-5.png",
  },
  {
    id: 3,
    title: "How to transition from a traditional to a digital bank",
    preTitle: "Getting Started",
    author: "David Grohl",
    date: "17/08/24",
    image: "/images/section-5.png",
  },
];
export default function SectionFive() {
  return (
    <section className="mt-33.5">
      <div className="flex flex-row">
        <div className="flex flex-col w-115.75 mx-16 xl:mx-20 flex-[35%]">
          <h2 className="text-3xl xl:text-4xl leading-[120%]">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <div className="mt-8 mb-4">
            <Button variant="secondary" size="lg">
              INSIGHTS
            </Button>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-x-4 gap-y-8 mx-4 xl:mx-8 flex-[60%] justify-center">
          {blog.map((item, index) =>
            index + 1 === 1 ? (
              <div
                key={item.id}
                className="flex flex-row gap-12 my-10 items-center"
              >
                <div className="relative w-80 h-74.25">
                  <Image src={item.image} alt="" fill />
                </div>
                <div className="w-[320.5px]">
                  <h5 className="text-[#2490BB] font-chivo-mono text-xs leading-[120%] uppercase">
                    {item.preTitle}
                  </h5>
                  <h3 className="text-2xl xl:text-3xl leading-[120%] mt-3">{item.title}</h3>
                  <div className="text-[#2490BB] flex flex-row gap-4 text-sm leading-[120%] mt-3">
                    <p>{item.author}</p>
                    <p>{item.date}</p>
                  </div>
                  <Button
                    variant="secondary"
                    className="w-full mt-15 opacity-50 hover:opacity-100"
                  >
                    READ MORE
                  </Button>
                </div>
              </div>
            ) : (
              <div key={item.id} className="w-[280.5px] xl:w-[320.5px] mx-6 my-10">
                <h5 className="text-[#2490BB] font-chivo-mono text-xs leading-[120%] uppercase">
                  {item.preTitle}
                </h5>
                <h3 className="text-2xl xl:text-3xl leading-[120%] mt-3">{item.title}</h3>
                <div className="text-[#2490BB] flex flex-row gap-4 text-sm leading-[120%] mt-3">
                  <p>{item.author}</p>
                  <p>{item.date}</p>
                </div>
                <Button
                  variant="secondary"
                  className="w-full mt-15 opacity-50 hover:opacity-100"
                >
                  READ MORE
                </Button>
              </div>
            ),
          )}
          <LinkButton className="w-full justify-end">
            READ MORE INSIGHTS
          </LinkButton>
        </div>
      </div>

      <Carousel className="flex flex-col items-center overflow-hidden">
        <CarouselContent className="">
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center bg-[#01141B] p-12 rounded-2xl"
            >
              <div className="flex flex-row gap-12 items-center">
                <div className="relative w-80 h-74.25">
                  <Image src={"/images/section-5.png"} alt="" fill />
                </div>
                <div className="w-[420.5px]">
                  <h5 className="text-[#2490BB] font-chivo-mono text-xs leading-[120%] uppercase">
                    getting started
                  </h5>
                  <h3 className="text-3xl leading-[120%] mt-3">
                    How we help brand reach out to more people
                  </h3>
                  <div className="text-[#2490BB] flex flex-row gap-4 text-sm leading-[120%] mt-3">
                    <p>Zoomerr</p>
                  </div>
                  <Button
                    variant="secondary"
                    className="w-full mt-15 opacity-50 hover:opacity-100"
                  >
                    READ MORE
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex flex-row items-center justify-between w-full px-10">
          <div className="mx-20" />
          <div className="flex flex-row items-center gap-4">
            <CarouselPrevious />
            <CarouselPosition count={4} />
            <CarouselNext />
          </div>
          <LinkButton>VIEW ALL</LinkButton>
        </div>
      </Carousel>

      <ContactUsCard
        title="Take the full advantage of going paper-less now."
        desc="CB7 helps your financial institution improve the client experience,
                  automate and optimize procedures, simplify banking operations"
        className="mt-20 from-transparent to-transparent"
      />
    </section>
  );
}
