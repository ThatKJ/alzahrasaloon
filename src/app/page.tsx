import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services limit={3} />
      <FinalCTA />
    </>
  );
}
