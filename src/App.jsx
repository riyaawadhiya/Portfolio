import CustomCursor from "./components/CustomCursor.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import SmoothScroll from "./components/SmoothScroll.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Process from "./components/Process.jsx";
import Experience from "./components/Experience.jsx";
import Freelancing from "./components/Freelancing.jsx";
import OpenToWork from "./components/OpenToWork.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative bg-ink-950 text-white">
        <CursorGlow />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Process />
          <Experience />
          <Freelancing />
          <OpenToWork />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
