import Hero from "@/components/Hero/page";
import Aboutblock from "@/components/Aboutblock/page"
import Statscounter from "@/components/Statscounter/page"
import ServiceBlock from "@/components/Serviceblock/page";
import Testimonials from "@/components/Testimonials/page";
import Convertctablock from "@/components/Convertctablock/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Aboutblock />
      <Statscounter/>
      <ServiceBlock/>
      <Testimonials/>
      <Convertctablock/>
    </>
  );
}
