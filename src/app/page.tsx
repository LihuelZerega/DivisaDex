'use client'
import { NextUIProvider } from "@nextui-org/react";
import HeroSection from "@/components/LandingPageComponents/HeroSection";
import NavBar from '@/components/LandingPageComponents/NavBar'

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <main>
          <NavBar />
          <HeroSection />
        </main>
      </NextUIProvider>
    </>
  );
}
