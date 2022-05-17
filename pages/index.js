import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Menu from "../sections/Menu";
import Service from "../sections/Service";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <Hero />
      {/* about section */}
      <About />
      {/* services section */}
      <Service />
      {/* menu section */}
      <Menu />
      {/* contact section */}
      <Contact />
    </>
  );
}
