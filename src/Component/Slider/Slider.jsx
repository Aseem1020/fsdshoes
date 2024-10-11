import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './Slider.scss';
import img1 from "../../Assets/Slider/slider1.jpg";
import img2 from "../../Assets/Slider/slider2.jpg";
import img3 from "../../Assets/Slider/slider3.jpg"; 
import img4 from "../../Assets/Slider/slider4.jpg"; 
import img5 from "../../Assets/Slider/slider5.jpg"; 
import img6 from "../../Assets/Slider/slider6.jpg"; 
import img7 from "../../Assets/Slider/slider7.jpg"; 
import img8 from "../../Assets/Slider/slider8.jpg"; 
import ra from "../../Assets/right-chevron.png";
import la from "../../Assets/left-chevron.png";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images
  const slides = [
    <motion.img
      key="slide1"
      src={img1}
      alt="Slide 1"
      initial={{ opacity: 0, scale: 0.8 }}  // Initial opacity and scale
      animate={{ opacity: 1, scale: 1 }}    // Animate to full opacity and scale
      exit={{ opacity: 0, scale: 1.1 }}      // Exit state with fade and scale
      transition={{ duration: 1, ease: "easeInOut" }} // Duration and easing
      className="slide-image"
    />,
    <motion.img
      key="slide2"
      src={img2}
      alt="Slide 2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="slide-image"
    />,
    <motion.img
      key="slide3"
      src={img3}
      alt="Slide 3"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="slide-image"
    />,
    <motion.img
      key="slide4"
      src={img4}
      alt="Slide 4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="slide-image"
    />,
    <motion.img
      key="slide5"
      src={img5}
      alt="Slide 5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="slide-image"
    />,
    <motion.img
      key="slide6"
      src={img6}
      alt="Slide 6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="slide-image"
    />,
    <motion.img
      key="slide7"
      src={img7}
      alt="Slide 7"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="slide-image"
    />,
    <motion.img
      key="slide8"
      src={img8}
      alt="Slide 8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="slide-image"
    />,
  ];

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Clear the interval on unmount
  }, );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {slides[currentSlide]} {/* Only one image at a time */}
      </div>

      <button onClick={prevSlide} className="arrow-left">
        <img src={la} alt="Left Arrow" />
      </button>
      <button onClick={nextSlide} className="arrow-right">
        <img src={ra} alt="Right Arrow" />
      </button>
    </div>
  );
};

export default Slider;
