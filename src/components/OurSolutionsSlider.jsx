import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const OurSolutionsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define all cards data
  const allCards = [
    [
      {
        icon: "https://img.icons8.com/ios-filled/50/132577/wind-turbine.png",
        title: "Renewable Energy Logistics",
        description: "Specialized in wind & solar component transport.",
      },
      {
        icon: "https://img.icons8.com/ios-filled/50/132577/trailer.png",
        title: "Telescopic Trailer Services",
        description: "Reliable transport of long & heavy loads.",
      },
      {
        icon: "https://img.icons8.com/ios-filled/50/132577/crane.png",
        title: "Tower Trailer Services",
        description: "Multi-axle trailer transport solutions.",
      },
    ],
  
    // Slide 2
    [
      {
        icon: "https://img.icons8.com/ios-filled/50/132577/tow-truck.png",
        title: "Crane & Crawler Shifting",
        description: "Relocation of heavy equipment and cranes.",
      },
      {
        icon: "https://img.icons8.com/ios-filled/50/132577/gear.png",
        title: "Puller Axel Services",
        description: "Heavy-duty transport up to 4200T.",
      },
      {
        icon: "https://img.icons8.com/ios-filled/50/132577/container-truck.png",
        title: "Soft High-Bed Trailers",
        description: "Soft 40T, 60ft trailers for cargo movement.",
      },
    ],
  
    // Slide 3
    [
      {
        icon: "https://img.icons8.com/ios-filled/50/132577/truck.png",
        title: "Volvo Puller Transport",
        description: "High-load transport with multi-axle setups.",
      },
      {
        icon: "https://img.icons8.com/ios-filled/50/132577/maintenance.png",
        title: "Machinery & Equipment",
        description: "Industrial machinery relocations.",
      },
      {
        icon: "https://img.icons8.com/ios-filled/50/132577/speed.png",
        title: "Express Cargo",
        description: "Fast and secure urgent logistics.",
      },
    ],
  
    // Slide 4
    [
      {
        icon: "https://img.icons8.com/ios-filled/50/132577/supply-chain.png",
        title: "Supply Chain Logistics",
        description: "End-to-end planning and optimization.",
      },
      {
        icon: "https://img.icons8.com/ios-filled/50/132577/delivery.png",
        title: "Freight Transportation",
        description: "Nationwide reliable delivery network.",
      },
      {
        icon: "https://img.icons8.com/ios-filled/50/132577/speed.png",
        title: "Express Cargo",
        description: "Fast and secure urgent logistics.",
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
          Our Services
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
