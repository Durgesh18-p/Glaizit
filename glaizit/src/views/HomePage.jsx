import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutGlaizitHome from "@/components/AboutGlaizitHome";
import ThingsToDoOnGlaizit from "@/components/ThingsToDoOnGlaizit";
import HomeRegester from "@/components/HomeRegester";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutGlaizitHome />
      <ThingsToDoOnGlaizit />
      <HomeRegester />
    </>
  );
};

export default HomePage;
