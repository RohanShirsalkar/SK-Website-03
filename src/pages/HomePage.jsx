import React from "react";
import CTAForm from "../components/CTAForm";
import OurSolutionsSlider from "../components/OurSolutionsSlider";
import HeroSlider from "../components/HeroSlider";
import SustainabilityCard from "../components/SustainabilityCard";
import ClientsSection from "../components/Clients";
import WhyChoseUs from "../components/WhyChoseUs";
import OurIndustries from "../components/OurIndustries";

const homePageSlides = [
  {
    id: 1,
    image: "/ship_2.jpeg",
    title: "Powering Seamless Logistics",
    subtitle: "Efficiency Delivered",
    description:
      "Simplify complexity with smart logistics solutions that are fast, scalable, and reliable.",
    ctaText: "Learn More",
  },
  {
    id: 2,
    image: "/truck_02.png",
    title: "Driven by Precision",
    subtitle: "Logistics, Refined",
    description:
      "From planning to execution, we offer end-to-end control for flawless delivery every time.",
    ctaText: "View Products",
  },
  {
    id: 3,
<<<<<<< HEAD
    image: "/blank-cargo-truck-road.jpg",
   title: "Your Logistics Partner",
  subtitle: "Always On Time",
  description:
    "We don’t just move cargo—we move confidence, with every shipment arriving exactly as promised.",
=======
    image: "/ship_2.jpeg",
    title: "Your Logistics Partner",
    subtitle: "Always On Time",
    description:
      "We don’t just move cargo—we move confidence, with every shipment arriving exactly as promised.",
>>>>>>> 17cf1aca1754974f5a1a9b9dc8b65e6c4f2ac7db
    ctaText: "Get Started",
  },
];

const HomePage = () => {
  return (
    <div>
      <HeroSlider slides={homePageSlides} />
      <OurSolutionsSlider />
      <OurIndustries />
      <ClientsSection />
      <SustainabilityCard />
      <WhyChoseUs />
      <CTAForm />
    </div>
  );
};

export default HomePage;
