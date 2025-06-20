"use client";

import { Hero } from "./_components/module/home/Hero";
import { Skills } from "./_components/module/home/Skills";
import { About } from "./_components/module/home/About";
import { Contact } from "./_components/module/home/Contact";
import { Footer } from "./_components/module/home/Footer";
import Process from "./_components/module/home/Process";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <About />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
