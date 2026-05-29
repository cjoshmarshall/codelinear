import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="px-6 sm:px-3 backdrop-blur-[5px] fixed z-50 flex w-full sm:w-148 lg:w-179 items-center sm:place-self-center justify-between mt-8 bg-[#2F2F2FB2] sm:rounded-lg py-2.5">
      <p className="text-2xl">N7</p>
      <ul className="flex gap-5 font-chivo-mono text-xs font-light">
        <li className="cursor-pointer">SOLUTIONS</li>
        <li className="cursor-pointer">RESOURCES</li>
        <li className="cursor-pointer">ABOUT US</li>
      </ul>
      <Button variant="secondary" size="sm" className="hidden sm:block">
        REQUEST DEMO
      </Button>
    </nav>
  );
}
