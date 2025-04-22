import React from "react";
import CTAForm from "../components/CTAForm";
import OurSolutionsSlider from "../components/OurSolutionsSlider";
import HeroSlider from "../components/HeroSlider";
import SustainabilityCard from "../components/SustainabilityCard";

const homePageSlides = [
  {
    id: 1,
    image: "/ship_2.jpeg",
    title: "Discover Innovation",
    subtitle: "Transforming ideas into reality",
    description:
      "Our cutting-edge solutions drive business growth and innovation across industries.",
    ctaText: "Learn More",
  },
  {
    id: 2,
    image: "/truck_02.png",
    title: "Elevate Your Experience",
    subtitle: "Premium quality & service",
    description:
      "Experience excellence through our meticulously crafted products and personalized service.",
    ctaText: "View Products",
  },
  {
    id: 3,
    image: "/ship_2.jpeg",
    title: "Join Our Community",
    subtitle: "Connect with like-minded people",
    description:
      "Be part of a thriving ecosystem where collaboration fuels success and growth.",
    ctaText: "Get Started",
  },
];

const HomePage = () => {
  return (
    <div>
      <HeroSlider slides={homePageSlides} />
      <OurSolutionsSlider />
      <SustainabilityCard />
      <CTAForm />
    </div>
  );
};

export default HomePage;
