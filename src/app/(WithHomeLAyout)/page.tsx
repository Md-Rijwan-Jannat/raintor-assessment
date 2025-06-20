"use client";

import { Hero } from "./_components/module/home/Hero";
import { Skills } from "./_components/module/home/Skills";
import { About } from "./_components/module/home/About";
import { Contact } from "./_components/module/home/Contact";
import Process from "./_components/module/home/Process";
import Footer from "./_components/module/home/Footer";

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
