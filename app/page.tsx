import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: "Home", link: "/"},
          {name: "About", link: "#about"},
          {name: "Projects", link: "#projects"},
          {name: "Contact", link: "#contact"},
        ]} />
        <Hero />
        <Grid />
        <Services/>
        <Projects/>
        <GetInTouch />
        <Footer/>
      </div>
    </main>
  );
}
