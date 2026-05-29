import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowRight } from "lucide-react";

const offices = [
  {
    id: 1,
    city: "London",
    address:
      "Linktia Infosystems Ltd - CB7, 26 Main Road Sundridge,TN14 6EP, England, United Kingdom.",
  },
  {
    id: 2,
    city: "Dubai",
    address:
      "Linktia Infosystems Ltd - CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates",
  },
  {
    id: 3,
    city: "Pune",
    address:
      "Linktia Infosystems Ltd - CB7,Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India",
  },
];

const links = [
  {
    id: 1,
    title: "Solutions",
    links: [
      { id: 1, title: "Core Banking CB7" },
      { id: 2, title: "Digital Banking N7" },
      { id: 3, title: "Open Banking" },
      { id: 4, title: "Loan Origination System" },
      { id: 5, title: "Loan Management System" },
      { id: 6, title: "Digital Transformation" },
    ],
  },
  {
    id: 2,
    title: "N7 Banking",
    links: [
      { id: 1, title: "About Us" },
      { id: 2, title: "Solutions" },
      { id: 3, title: "Contact" },
      { id: 4, title: "Company" },
      { id: 5, title: "Careers" },
      { id: 6, title: "Insights" },
      { id: 7, title: "Core Team" },
      { id: 8, title: "Brand Center" },
    ],
  },
  {
    id: 3,
    title: "Our Socials",
    links: [
      { id: 1, title: "Brand Center" },
      { id: 2, title: "X" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row mx-8 md:mx-12 gap-12 xl:gap-0 xl:justify-between">
      <AnimatedShinyText className="text-[200px] lg:text-[280px] xl:text-[338.3px] font-semibold leading-[80%]">
        N7
      </AnimatedShinyText>
      <div className="min-w-0">
        <div className="flex flex-row flex-wrap gap-8 mb-28">
          {offices.map((item) => (
            <div key={item.id} className="flex flex-col xl:w-64">
              <h5 className="leading-[130%]">{item.city}</h5>
              <p className="leading-[130%] mt-4 text-gray-400">
                {item.address}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap gap-16 sm:gap-8 mb-20">
          {links.map((item) => (
            <div key={item.id} className="flex flex-col md:w-64">
              <h5 className="leading-[130%]">{item.title}</h5>
              {item.links.map((link) => (
                <ul key={link.id} className="w-fit md:w-auto">
                  <li className="flex flex-row justify-between leading-[130%] mt-4 text-gray-400 w-44">
                    {link.title}
                    <ArrowRight height={16} className="text-light-blue" />
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-12 w-full md:w-lg xl:w-3xl">
          Copyright © 2022 by Linktia Infosystems Limited — &#91;CB7 and N7 as
          Commercial Brand&#93; — &#91;Registered under the Companies Act 2006
          in England and Wales | Number of Incorporation 13100992&#93;
        </p>
      </div>
    </footer>
  );
}
