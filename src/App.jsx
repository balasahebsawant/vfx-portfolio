import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Showreel from "./components/sections/Showreel";
import Projects from "./components/sections/Projects";
import Expertise from "./components/sections/Expertise";
import Timeline from "./components/sections/Timeline";
import Contact from "./components/sections/Contact";
import CustomCursor from "./components/ui/CustomCursor";

export default function App() {
  return (
    <div className="bg-base text-text">
      
      {/* Custom Yellow Cursor */}
      <CustomCursor />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <Showreel />
        <Projects />
        <Expertise />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
