"use client";
import About from "@/components/layout/about";
import Contact from "@/components/layout/contact";
import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";
import Pricing from "@/components/layout/pricing";
import { useState } from "react";
import Image from "next/image";
import FloatingButton from "@/components/common/floating-button";

export default function Home() {
  const [isBlur, setBlur] = useState(false);
  return (
    <div className="relative overflow-hidden">
      <Image
        className="absolute md:-top-64 md:-left-20 -top-36 -right-48 -z-50"
        src={"/images/top-blob.png"}
        alt="top-blob"
        width={600}
        height={600}
      />
      <Navbar setBlur={setBlur} />
      <main
        className={`flex min-h-screen flex-col items-center justify-between md:p-24 md:pt-0 p-5 pt-36 ${
          isBlur && "blur-sm"
        }`}
      >
        <Hero />
        <About />
        <Pricing />
        <Contact />
      </main>
      <FloatingButton />
      <Image
        className="absolute top-[500px] -left-28 md:left-auto md:-right-56 -z-50 md:-bottom-72"
        src={"/images/hero-blob.png"}
        alt="hero-blob"
        height={800}
        width={800}
      />
    </div>
  );
}
