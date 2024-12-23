import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // 1 for next, -1 for previous
    const currentImageRef = useRef(null);
    const nextImageRef = useRef(null);
    const prevImageRef = useRef(null);
    const indicatorRefs = useRef([]);

    const nextImage = () => {
        setDirection(1);
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
    };

    const prevImage = () => {
        setDirection(-1);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(prevIndex);
    };

    const handleIndicatorClick = (index) => {
        setDirection(index > currentIndex ? 1 : -1); // Determine direction based on index
        setCurrentIndex(index);
    };

    // GSAP transition for image change and scaling
    useEffect(() => {
        const interval = setInterval(nextImage, 5000); // Change every 5 seconds

        if (currentImageRef.current && nextImageRef.current && prevImageRef.current) {
            if (direction === 1) {
                // Next image animation
                gsap.fromTo(
                    nextImageRef.current,
                    { x: 100, opacity: 0, scale: 0.9 },
                    { x: 0, opacity: 0.5, scale: 1, duration: 1, ease: "elastic.out(1, 0.3)" }
                );
                gsap.fromTo(
                    currentImageRef.current,
                    { x: 400, opacity: 0, scale: 1 },
                    { x: 0, opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.75)" }
                );
                gsap.fromTo(
                    prevImageRef.current,
                    { x: 100, opacity: 0, scale: 0.9 },
                    { x: 0, opacity: 0.5, scale: 1, duration: 1,  ease: "elastic.out(1, 0.3)" }
                );
            } else if (direction === -1) {
                // Previous image animation
                gsap.fromTo(
                    prevImageRef.current,
                    { x: -100, opacity: 0, scale: 0.9 },
                    { x: 0, opacity: 0.5, scale: 1, duration: 1, ease: "elastic.out(1, 0.3)" }
                );
                gsap.fromTo(
                    currentImageRef.current,
                    {x: -400, opacity: 0, scale: 1 },
                    {x: 0,opacity: 1, scale: 0.9, duration: 1, ease: "elastic.out(1, 0.75)" }
                );
                gsap.fromTo(
                    nextImageRef.current,
                    { x: -100, opacity: 0, scale: 0.9 },
                    { x: 0, opacity: 0.5, scale: 1, duration: 1, ease: "elastic.out(1, 0.3)" }
                );
            }

            // Animate indicators
            indicatorRefs.current.forEach((ref, index) => {
                gsap.to(ref, {
                    scale: index === currentIndex ? 1.5 : 1,
                    backgroundColor: index === currentIndex ? "gold" : "white",
                    duration: 0.3,
                });
            });
        }
        return () => clearInterval(interval);
    }, [currentIndex, direction]);

    return (
        <div className="flex justify-center items-center sm:h-[600px] xs:h-[400px] relative">
            {/* Previous Image */}
            <div
                ref={prevImageRef}
                onClick={prevImage}
                className="absolute w-1/3 h-full lg:-left-32 xs:left-0 cursor-pointer flex items-center justify-center"
            >
                <img
                    src={images[(currentIndex - 1 + images.length) % images.length]}
                    alt="Previous"
                    className="sm:h-full xs:h-[300px] object-cover opacity-50 transform scale-90 transition-all duration-500"
                />
            </div>

            {/* Current Image */}
            <div ref={currentImageRef} className="absolute w-2/3 h-full flex items-center justify-center z-10">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="w-full sm:h-full xs:h-[300px] object-contain opacity-100 rounded-lg transform scale-100 transition-all duration-500"
                />
            </div>

            {/* Next Image */}
            <div
                ref={nextImageRef}
                onClick={nextImage}
                className="absolute w-1/3 h-full lg:-right-32 xs:right-0 cursor-pointer flex items-center justify-center"
            >
                <img
                    src={images[(currentIndex + 1) % images.length]}
                    alt="Next"
                    className="sm:h-full xs:h-[300px] object-cover opacity-50 transform scale-90 transition-all duration-500"
                />
            </div>

            {/* Image Indicator with Clickable Circles */}
            <div className="absolute bottom-4 w-full flex justify-center space-x-2 z-20">
                {images.map((_, index) => (
                    <div
                        key={index}
                        ref={(el) => (indicatorRefs.current[index] = el)}
                        onClick={() => handleIndicatorClick(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-customGold' : 'bg-white'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;


