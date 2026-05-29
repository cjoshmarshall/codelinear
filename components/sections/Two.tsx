import Image from "next/image";
import { Button } from "../ui/button";
import LinkButton from "../LinkButton";

const banking = [
  {
    id: 1,
    icon: "/icons/core-banking.svg",
    title: "Core Banking CB7",
    desc: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    nbfc: false,
  },
  {
    id: 2,
    icon: "/icons/digital-banking.svg",
    title: "Digital Banking N7",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
    nbfc: false,
  },
  {
    id: 3,
    icon: "/icons/open-banking.svg",
    title: "Open Banking",
    desc: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    nbfc: false,
  },
  {
    id: 4,
    icon: "/icons/loan-origination.svg",
    title: "Loan Origination System",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
    nbfc: true,
  },
  {
    id: 5,
    icon: "/icons/loan-management.svg",
    title: "Loan Management System",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
    nbfc: true,
  },
];

export default function SectionTwo() {
  return (
    <section className="flex flex-row mx-12 xl:mx-20 mt-37">
      <div className="flex-1">
        <div className="w-96 xl:w-108.25">
          <h3 className="text-3xl xl:text-4xl leading-[120%]">
            All of our solutions are tailor-made to your needs
          </h3>
          <Button variant="secondary" size="lg" className="mt-12">
            REQUEST DEMO
          </Button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap flex-1 justify-between gap-y-13">
        {banking.map((item) => (
          <div key={item.id} className="w-60 xl:w-72">
            <Image src={item.icon} alt="" height={42} width={42} />
            <h3 className="mt-6 text-xl xl:text-2xl leading-[120%]">{item.title}</h3>
            <p className="mt-8 mb-6 text-sm xl:text-base leading-[130%] text-gray">{item.desc}</p>
            <LinkButton>LEARN MORE</LinkButton>
          </div>
        ))}
      </div>
    </section>
  );
}
