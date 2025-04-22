import React from "react";
import CTAForm from "../components/CTAForm";
import OurSolutionsSlider from "../components/OurSolutionsSlider";
import HeroSlider from "../components/HeroSlider";
import SustainabilityCard from "../components/SustainabilityCard";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <OurSolutionsSlider />
      <SustainabilityCard />
      <CTAForm />
    </div>
  );
};

export default HomePage;
