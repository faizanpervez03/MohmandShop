// Carousel.jsx
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const images = [
    "/images/banner/megamart.jpg", // Images from the public folder
    "/images/banner/infinix.webp", // Images from the public folder
    "/images/banner/mobiles.avif", // Images from the public folder
    "/images/banner/infinix1.png",
    "/images/banner/kids_bike.jpg",
    "/images/banner/lays.jpg",
    "/images/banner/lays2.webp",
    // "/images/banner/accessories.png",
    
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move the carousel from right to left every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Slide every 2 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to go to the previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to the next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to a specific slide when clicking on the thin lines
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full h-[200px] md:h-[400px] lg:h-[400px] mx-auto group mt-24 sm:mt-32 md:mt-32 lg:mt-32">
      {/* Image container */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          
        }}
      ></div>

      {/* Left Arrow */}
      <div
        className="absolute top-1/2 left-5 -translate-y-1/2 text-3xl p-2 bg-black bg-opacity-30 rounded-full cursor-pointer hover:bg-opacity-60"
        onClick={prevSlide}
        onKeyDown={(e) => e.key === "Enter" && prevSlide()} // Handle keyboard accessibility
        role="button"
        tabIndex="0"
        aria-label="Previous Slide"
      >
        <FaArrowLeft className="text-white" />
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 right-5 -translate-y-1/2 text-3xl p-2 bg-black bg-opacity-30 rounded-full cursor-pointer hover:bg-opacity-60"
        onClick={nextSlide}
        onKeyDown={(e) => e.key === "Enter" && nextSlide()} // Handle keyboard accessibility
        role="button"
        tabIndex="0"
        aria-label="Next Slide"
      >
        <FaArrowRight className="text-white" />
      </div>

      {/* Thin line dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`w-10 h-1 bg-gray-300 cursor-pointer transition-all duration-300 ${
              slideIndex === currentIndex ? "bg-gray-700" : ""
            }`}
            onClick={() => goToSlide(slideIndex)} // Clicking on thin line changes the slide
          ></div>
        ))}
      </div>

      {/* Decorative styling for beauty */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
    </div>
  );
};

export default Carousel;
