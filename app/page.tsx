import Footer from "@/components/Footer";
import SectionFive from "@/components/sections/Five";
import SectionFour from "@/components/sections/Four";
import SectionOne from "@/components/sections/One";
import SectionThree from "@/components/sections/Three";
import SectionTwo from "@/components/sections/Two";

export default function Home() {
  return (
    <main>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </main>
  );
}
