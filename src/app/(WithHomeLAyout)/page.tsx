"use client";

import { Hero } from "./_components/module/home/Hero";
import { Skills } from "./_components/module/home/Skills";
import { Experience } from "./_components/module/home/Experience";
import { Process } from "./_components/module/home/Process";
import { Contact } from "./_components/module/home/Contact";
import { Footer } from "./_components/module/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Experience />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
