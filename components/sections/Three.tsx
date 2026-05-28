import { Check } from "lucide-react";
import { Button } from "../ui/button";
import LinkButton from "../LinkButton";
import Image from "next/image";
import ContactUsCard from "../ContactUsCard";

const list1 = [
  { id: 1, desc: "Customer-On Boarding" },
  { id: 2, desc: "Managing deposits and withdrawals" },
  { id: 3, desc: "Transaction management" },
  { id: 4, desc: "Interest Calculation" },
  {
    id: 5,
    desc: "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  },
];

const list2 = [
  { id: 1, desc: "CRM Activities" },
  { id: 2, desc: "Configuring New Banking Products" },
  { id: 3, desc: "Loan disbursal and Loan management" },
  {
    id: 8,
    desc: "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
  },
];

export default function SectionThree() {
  return (
    <section className="mt-33.5">
      <div className="relative overflow-hidden">
        <div className="w-146 mx-20 mt-36 absolute">
          <h2 className="text-5xl leading-[120%]">
            A complete cloud-based core banking.
          </h2>
          <p className="text-base leading-[130%] mt-4 w-89 font-light text-gray">
            Faster time to market with our cloud-based core banking services
          </p>
          <div className="mt-8 mb-4">
            <Button size="lg">REQUEST DEMO</Button>
          </div>
          <LinkButton>LEARN MORE</LinkButton>
        </div>
        <div className="relative -right-4/6 top-0 w-180 h-140">
          <Image src="/images/section-3.png" alt="" fill />
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="relative w-180 h-140 right-1/6">
          <Image src="/images/section-3.png" alt="" fill />
        </div>
        <div className="w-146 mx-20 mt-36 absolute top-0 right-0">
          <h4 className="text-3xl leading-[120%]">
            Run a more efficient, flexible,and digitally connected corebanking
            system
          </h4>
          <h5 className="leading-[120%] mt-8 mb-4">What you will get:</h5>
          <div className="flex flex-row">
            <ul className="w-74">
              {list1.map((items) => (
                <li
                  key={items.id}
                  className="flex text-gray leading-[130%] py-0.75 gap-2"
                >
                  <div className="flex items-center bg-linear-to-r from-light-blue to-blue rounded-full w-4.5 h-4.5">
                    <Check height={16} />
                  </div>
                  <span>{items.desc}</span>
                </li>
              ))}
            </ul>
            <ul className="w-74">
              {list2.map((items) => (
                <li
                  key={items.id}
                  className="flex text-gray leading-[130%] py-0.75 gap-2"
                >
                  <div className="flex items-center bg-linear-to-r from-light-blue to-blue rounded-full w-4.5 h-4.5">
                    <Check height={16} />
                  </div>
                  <span>{items.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ContactUsCard
        title="Take the full advantage of going paper-less now."
        desc="CB7 helps your financial institution improve the client experience,
            automate and optimize procedures, simplify banking operations"
        image="/images/section-3-bg.png"
        className="mt-48"
      />
    </section>
  );
}
