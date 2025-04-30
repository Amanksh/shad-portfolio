"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <>
      <div className="min-h-screen relative">
        {/* <BeamEffect /> */}
        <BackgroundBeams />
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <Hero />
        </div>
        <div className="max-w-6xl mx-auto p-5 mt-20">
          <Skills />
        </div>
        <Projects />
        <Contact />
      </div>
    </>
  );
}
