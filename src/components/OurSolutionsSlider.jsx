import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const OurSolutionsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define all cards data
  const allCards = [
    // Slide 1
    [
      {
        icon: "/logistics.png",
        title: "Consulting & Planning",
        description:
          "We provide Consulting & Planning for every kind of Wind Energy systems.",
      },
      {
        icon: "/logistics.png",
        title: "Savings on Money",
        description:
          "Save money on Spares & Services to increase the value of your production.",
      },
      {
        icon: "/logistics.png",
        title: "Certified Engineers",
        description:
          "Our Experienced Engineers & Staff can handle all kinds of Wind Energy systems.",
      },
    ],
    // Slide 2
    [
      {
        icon: "/logistics.png",
        title: "Regular Maintenance",
        description:
          "Our maintenance services ensure your wind systems operate at peak efficiency.",
      },
      {
        icon: "/logistics.png",
        title: "Quality Spare Parts",
        description:
          "We supply genuine parts with warranty to keep your systems running reliably.",
      },
      {
        icon: "/logistics.png",
        title: "24/7 Support",
        description:
          "Our technical support team is available round the clock for any emergencies.",
      },
    ],
    // Slide 3
    [
      {
        icon: "/logistics.png",
        title: "Staff Training",
        description:
          "We offer comprehensive training programs for your operational staff.",
      },
      {
        icon: "/logistics.png",
        title: "Remote Monitoring",
        description:
          "Advanced monitoring systems to track performance and detect issues early.",
      },
      {
        icon: "/logistics.png",
        title: "Sustainability Solutions",
        description:
          "Eco-friendly approaches to maximize the environmental benefits of wind energy.",
      },
    ],
    // Slide 4
    [
      {
        icon: "/logistics.png",
        title: "Staff Training",
        description:
          "We offer comprehensive training programs for your operational staff.",
      },
      {
        icon: "/logistics.png",
        title: "Remote Monitoring",
        description:
          "Advanced monitoring systems to track performance and detect issues early.",
      },
      {
        icon: "/logistics.png",
        title: "Sustainability Solutions",
        description:
          "Eco-friendly approaches to maximize the environmental benefits of wind energy.",
      },
    ],
  ];

  const totalSlides = allCards.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  // Icons for the cards

  return (
    <div className="bg-gray-800 text-white py-16 px-4">
      {/* Heading and Subheading */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Offering valuable benefits To Our Customers Through Ongoing Production
          and Innovation.
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          While working on the yield and execution of Wind energy projects, our
          wind spares industry experience empowers us to give top to bottom
          material sourcing and inventory networkability for each progression.
        </p>
      </div>

      {/* Card Slider */}
      <div className="relative max-w-6xl mx-auto">
        {/* Cards Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {allCards.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="min-w-full flex flex-col sm:flex-row gap-6 px-4"
              >
                {slide.map((card, cardIndex) => (
                  <div
                    key={`${slideIndex}-${cardIndex}`}
                    className="bg-white text-gray-800 rounded-lg p-6 flex-1 flex flex-col items-center text-center relative"
                  >
                    <img src={card.icon} className="w-1/4 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                    <p className="text-gray-600 mb-6">{card.description}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-blue-500 w-8" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSolutionsSlider;
