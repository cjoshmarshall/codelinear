import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="px-6 md:px-3 backdrop-blur-[5px] fixed z-50 flex w-full md:w-148 lg:w-179 items-center md:place-self-center justify-between mt-8 bg-[#2F2F2FB2] md:rounded-lg py-2.5">
      <p className="text-2xl">N7</p>
      <ul className="flex gap-5 font-chivo-mono text-xs font-light items-center">
        <li className="cursor-pointer flex flex-row items-center">
          SOLUTIONS <ChevronDown />
        </li>
        <li className="cursor-pointer flex flex-row items-center">
          RESOURCES <ChevronDown />
        </li>
        <li className="cursor-pointer">ABOUT US</li>
      </ul>
      <Button variant="secondary" className="hidden md:block">
        REQUEST DEMO
      </Button>
    </nav>
  );
}
