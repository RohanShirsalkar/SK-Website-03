import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const OurSolutionsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define all cards data
  const allCards = [
    // Slide 1
    [
      {
        icon: "consulting",
        title: "Consulting & Planning",
        description:
          "We provide Consulting & Planning for every kind of Wind Energy systems.",
      },
      {
        icon: "savings",
        title: "Savings on Money",
        description:
          "Save money on Spares & Services to increase the value of your production.",
      },
      {
        icon: "engineers",
        title: "Certified Engineers",
        description:
          "Our Experienced Engineers & Staff can handle all kinds of Wind Energy systems.",
      },
    ],
    // Slide 2
    [
      {
        icon: "maintenance",
        title: "Regular Maintenance",
        description:
          "Our maintenance services ensure your wind systems operate at peak efficiency.",
      },
      {
        icon: "parts",
        title: "Quality Spare Parts",
        description:
          "We supply genuine parts with warranty to keep your systems running reliably.",
      },
      {
        icon: "support",
        title: "24/7 Support",
        description:
          "Our technical support team is available round the clock for any emergencies.",
      },
    ],
    // Slide 3
    [
      {
        icon: "training",
        title: "Staff Training",
        description:
          "We offer comprehensive training programs for your operational staff.",
      },
      {
        icon: "monitoring",
        title: "Remote Monitoring",
        description:
          "Advanced monitoring systems to track performance and detect issues early.",
      },
      {
        icon: "sustainability",
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
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "consulting":
        return (
          <div className="h-20 w-20 mx-auto mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
              <circle
                cx="40"
                cy="40"
                r="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M40,20 Q40,30 30,35 Q40,40 40,50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M65,30 L85,30 L85,50 L65,50 Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="40" cy="40" r="8" fill="currentColor" />
            </svg>
          </div>
        );
      case "savings":
        return (
          <div className="h-20 w-20 mx-auto mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
              <circle
                cx="50"
                cy="40"
                r="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <text
                x="50"
                y="48"
                textAnchor="middle"
                fill="currentColor"
                fontSize="20"
              >
                ₹
              </text>
              <path
                d="M30,70 Q50,60 70,70"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M30,75 L70,75"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        );
      case "engineers":
        return (
          <div className="h-20 w-20 mx-auto mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
              <circle
                cx="50"
                cy="30"
                r="15"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M30,75 L70,75 L70,50 L30,50 Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path d="M40,30 L60,30" stroke="currentColor" strokeWidth="2" />
              <circle
                cx="75"
                cy="25"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path d="M75,15 L75,35" stroke="currentColor" strokeWidth="2" />
              <path d="M65,25 L85,25" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        );
      case "maintenance":
        return (
          <div className="h-20 w-20 mx-auto mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
              <path
                d="M30,30 L70,30 L70,70 L30,70 Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path d="M40,40 L60,60" stroke="currentColor" strokeWidth="2" />
              <path d="M60,40 L40,60" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="5" fill="currentColor" />
            </svg>
          </div>
        );
      case "parts":
        return (
          <div className="h-20 w-20 mx-auto mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
              <circle
                cx="30"
                cy="30"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="70"
                cy="30"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="30"
                cy="70"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="70"
                cy="70"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path d="M40,30 L60,30" stroke="currentColor" strokeWidth="2" />
              <path d="M30,40 L30,60" stroke="currentColor" strokeWidth="2" />
              <path d="M70,40 L70,60" stroke="currentColor" strokeWidth="2" />
              <path d="M40,70 L60,70" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        );
      case "support":
        return (
          <div className="h-20 w-20 mx-auto mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
              <circle
                cx="50"
                cy="30"
                r="15"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path d="M30,80 L70,80" stroke="currentColor" strokeWidth="2" />
              <path d="M40,45 L40,80" stroke="currentColor" strokeWidth="2" />
              <path d="M60,45 L60,80" stroke="currentColor" strokeWidth="2" />
              <path d="M45,30 L55,30" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        );
      case "training":
        return (
          <div className="h-20 w-20 mx-auto mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
              <rect
                x="20"
                y="30"
                width="60"
                height="40"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path d="M35,50 L65,50" stroke="currentColor" strokeWidth="2" />
              <path d="M35,60" stroke="currentColor" strokeWidth="2" />
              <circle
                cx="50"
                cy="20"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        );
      case "monitoring":
        return (
          <div className="h-20 w-20 mx-auto mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
              <rect
                x="20"
                y="20"
                width="60"
                height="40"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M30,40 L45,55 L55,35 L70,50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path d="M40,70 L60,70" stroke="currentColor" strokeWidth="2" />
              <path d="M50,60 L50,70" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        );
      case "sustainability":
        return (
          <div className="h-20 w-20 mx-auto mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
              <path
                d="M50,20 L20,80 L80,80 Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="50"
                cy="40"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path d="M40,70 L60,70" stroke="currentColor" strokeWidth="2" />
              <path d="M35,60 L65,60" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

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

      {/* Call to Action Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300">
          Get Started
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300">
          Other Services
        </button>
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
                    {/* Green bar at top */}
                    {/* <div className="absolute top-0 left-0 right-0 h-1 bg-green-500"></div> */}

                    {/* Icon */}
                    {renderIcon(card.icon)}

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                    <p className="text-gray-600 mb-6">{card.description}</p>

                    {/* Button */}
                    {/* <div className="mt-auto">
                      <button className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-colors duration-300">
                        <ChevronRight size={24} />
                      </button>
                    </div> */}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
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
                index === currentSlide ? "bg-green-500 w-8" : "bg-gray-400"
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
