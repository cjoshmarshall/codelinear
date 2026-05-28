import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="backdrop-blur-[5px] fixed z-50 flex w-179 items-center place-self-center justify-between mt-8 bg-[#2F2F2FB2] rounded-lg p-2.5">
      <p className="text-2xl">N7</p>
      <ul className="flex gap-5 font-chivo-mono text-xs font-light">
        <li className="cursor-pointer">SOLUTIONS</li>
        <li className="cursor-pointer">RESOURCES</li>
        <li className="cursor-pointer">ABOUT US</li>
      </ul>
      <Button variant="secondary" size="sm">
        REQUEST DEMO
      </Button>
    </nav>
  );
}
