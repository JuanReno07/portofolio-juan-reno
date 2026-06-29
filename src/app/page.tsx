import fs from "fs";
import path from "path";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/sections/Hero";
import Impact from "@/sections/Impact";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Expertise from "@/sections/Expertise";
import Work from "@/sections/Work";
import Education from "@/sections/Education";
import Gallery from "@/sections/Gallery";
import Contact from "@/sections/Contact";
import NetworkBackground from "@/components/effects/NetworkBackground";

export default function Home() {
  // Check if CV PDF file exists in public/documents folder
  const cvPath = path.join(process.cwd(), "public", "documents", "Yosafat-Juan-Reno-CV.pdf");
  const hasCV = fs.existsSync(cvPath);

  return (
    <>
      {/* Dynamic Interactive Background */}
      <NetworkBackground />

      {/* Main sticky navigation bar */}
      <Navigation hasCV={hasCV} />

      {/* Main content elements */}
      <main className="flex-grow flex flex-col relative z-10 w-full overflow-hidden">
        
        {/* 1. Hero Section */}
        <Hero hasCV={hasCV} />
        
        {/* 2. Metrics Impact Counters */}
        <Impact />
        
        {/* 3. About Section */}
        <About />
        
        {/* 4. Experience Timeline */}
        <Experience />
        
        {/* 5. Skill Expertise Groups */}
        <Expertise />
        
        {/* 6. Case Studies Portfolio */}
        <Work />
        
        {/* 7. Education Credentials */}
        <Education />
        
        {/* 8. Infrastructure Hardware & Team Gallery */}
        <Gallery />
        
        {/* 9. Direct Connection Contacts */}
        <Contact />
        
      </main>

      {/* Main Footer layout */}
      <Footer />
    </>
  );
}
