import { useState, useEffect } from "react";

const HeroSlider = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // const goToSlide = (index) => {
  //   setCurrentSlide(index);
  // };

  return (
    <div className="relative w-full h-screen sm:h-[800px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-10 lg:px-20">
              <div className="max-w-lg text-white">
                <h2 className="text-sm md:text-base uppercase tracking-wider mb-2">
                  {slide.subtitle}
                </h2>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-base mb-8 text-gray-200">
                  {slide.description}
                </p>
                {/* Optional CTA Button */}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows - hidden now */}
      {/* 
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      */}

      {/* Indicators */}
      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default HeroSlider;
