import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Button } from "../ui/button";
import LinkButton from "../LinkButton";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import ContactUsCard from "../ContactUsCard";

const content = [
  {
    id: 1,
    title: "Fully compliant with regulatory requirement",
    image: "/images/section-4-phone-1.png",
    desc: "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
    list: [
      { id: 1, desc: "Pre-integrated Security System" },
      { id: 2, desc: "Fully Compliant With Regulatory Requirement" },
      { id: 3, desc: "Digitally Connected Core" },
    ],
  },
  {
    id: 2,
    title: "No legacy IT systems",
    image: "/images/section-4-phone-2.png",
    desc: "Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
    list: [
      { id: 1, desc: "Adaptive & Intelligent API monetization" },
      { id: 2, desc: "Ambient User Experience" },
      { id: 3, desc: "Cloud-native With lower TCO" },
    ],
  },
  {
    id: 3,
    title: "No traditional branches",
    image: "/images/section-4-phone-3.png",
    desc: "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.’",
    list: [
      { id: 1, desc: "Branchless & Paperless Banking" },
      { id: 2, desc: "Digital Transformation Capability" },
      { id: 3, desc: "Optimized, Adoptable and Scalable" },
    ],
  },
];

export default function SectionFour() {
  return (
    <section className="mt-20 md:mt-52.5 pb-28 bg-white-smoke text-dark">
      <Marquee
        className="text-3xl md:text-5xl font-semibold leading-[120%] py-6 bg-white"
        autoFill
      >
        <Image
          src="/icons/twinkle.svg"
          alt=""
          width={58}
          height={58}
          className="mx-8"
        />
        <span className="bg-linear-to-r from-light-blue to-blue bg-clip-text text-transparent">
          N7
        </span>
        <Image
          src="/icons/twinkle.svg"
          alt=""
          width={58}
          height={58}
          className="mx-8"
        />
        <span>Say</span>
        <Image src="/gif/hi.gif" alt="" width={94} height={66} />
        <span>to the new way of banking</span>
        <Image
          src="/icons/twinkle.svg"
          alt=""
          width={58}
          height={58}
          className="mx-8"
        />
        <span className="bg-linear-to-r from-light-blue to-blue bg-clip-text text-transparent">
          CB7
        </span>
      </Marquee>
      <div className="mx-8 md:mx-auto relative">
        <div className="hidden md:block w-186 h-100 -top-10 absolute right-1/4">
          <Image src="/images/section-4-bg-1.png" alt="" fill />
        </div>
        <div className="h-311.25 w-100 top-1/5 absolute -left-10 md:left-0">
          <Image src="/images/section-4-bg-2.png" alt="" fill />
        </div>
        <div className="hidden md:block h-200 w-100 top-[65%] absolute right-0">
          <Image src="/images/section-4-bg-3.png" alt="" fill />
        </div>
        <div className="flex flex-col md:flex-row my-32 md:pl-16 xl:pl-20 md:pr-16 xl:pr-32 w-full justify-between">
          <div className="flex flex-col w-96 xl:w-109.5 z-10">
            <h2 className="text-4xl xl:text-5xl leading-[120%]">
              Digital banking out-of-the-box
            </h2>
            <p className="text-sm xl:text-base leading-[130%] mt-8  w-96 xl:w-115.5 font-light text-gray-800">
              N7 helps your financial institution improve the client experience,
              automate and optimize procedures
            </p>
            <div className="mt-8 mb-4">
              <Button size="lg">REQUEST DEMO</Button>
            </div>
            <LinkButton>LEARN MORE</LinkButton>
          </div>
          <div>
            {content.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  item.id % 2 === 0 ? "flex-row-reverse" : "flex-row",
                  content.length !== index + 1 ? "mb-12 md:mb-28" : "",
                  "flex w-full gap-x-8 xl:gap-x-20",
                )}
              >
                <div className="hidden md:block w-48 xl:w-67 h-96 xl:h-135.5 relative">
                  <Image src={item.image} alt="" fill />
                </div>
                <div className="flex flex-row flex-wrap flex-1 justify-between gap-y-13">
                  <div className="md:w-72">
                    <h3 className="mt-6 text-xl font-semibold leading-[120%]">
                      {item.title}
                    </h3>
                    <p className="mt-8 mb-6 leading-[130%] text-gray-800">
                      {item.desc}
                    </p>
                    <ul className="w-74">
                      {item.list.map((listItem) => (
                        <li
                          key={listItem.id}
                          className="flex leading-[130%] py-1.5 gap-2"
                        >
                          <div className="flex text-white items-center bg-linear-to-r from-light-blue to-blue rounded-full w-4.5 h-4.5">
                            <Check height={16} />
                          </div>
                          <span>{listItem.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactUsCard
        title="Take the full advantage of going paper-less now."
        desc="CB7 helps your financial institution improve the client experience,
                  automate and optimize procedures, simplify banking operations"
        image="/images/section-4-bg-4.png"
        className="text-white mx-4"
        imageClassName="w-1/2"
      />
    </section>
  );
}
