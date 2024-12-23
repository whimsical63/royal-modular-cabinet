import React, {useState, useEffect, useRef} from 'react';
import ImageCarousel from '../components/ImageCarousel';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const Gallery = () => {
    const images = [
        '../../assets/hero.png',
        '../../assets/front.png',
        '../../assets/goal.jpg',
        '../../assets/gallery1.jpg',
        '../../assets/gallery2.jpg',
        '../../assets/gallery3.jpg',
        '../../assets/gallery4.jpg',
        '../../assets/kitchen1.jpg',
        '../../assets/kitchen2.jpg',
        '../../assets/kitchen3.jpg',
        '../../assets/kitchen4.jpg',
        '../../assets/kitchen5.jpg',
        '../../assets/kitchen6.jpg',
    ];

    const logoRef = useRef(null);
    const h2Ref = useRef(null);
    const bannerRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        // Split the text into spans and wrap each character in a span
        const text = h2Ref.current;
        const characters = text.innerText.split("");
        text.innerHTML = characters.map(char => `<span>${char}</span>`).join("");

        const banner = bannerRef.current;
        const chars = banner.innerText.split("");
        banner.innerHTML = chars.map(char => `<span>${char}</span>`).join("");


        gsap.fromTo(
            h2Ref.current.querySelectorAll("span"),
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                stagger: 0.02, // Delay between each character animation
                duration: 0.8,
                scrollTrigger: {
                    trigger: h2Ref.current,
                    start: "top 90%",
                    toggleActions: "play none restart reverse",
                },
            }
        );

        gsap.fromTo(
            bannerRef.current.querySelectorAll("span"),
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                stagger: 0.02, // Delay between each character animation
                duration: 0.8,
                scrollTrigger: {
                    trigger: bannerRef.current,
                    start: "top 90%",
                    toggleActions: "play none restart reverse",
                },
            }
        );

        gsap.fromTo(
            logoRef.current,
            {
                x: -100,
                duration: 1,
                opacity: 0,
                ease: "back.out"
            },
            {
                x: 0,
                duration: 1,
                opacity: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: logoRef.current,
                    start: "top 85%",
                    toggleActions: "play none restart reverse",
                },
            },
        );
    }, []);

    return (
        <div className="relative mb-16">
            {/* Background Image */}
            <div className="absolute sm:-right-60 h-[1500px] sm:-bottom-64 xs:-right-90 xs:-bottom-96">
            <img
                src="../../assets/RMC_1.png"
                alt="Background"
                className="z-0 opacity-30 h-full w-full object-cover md:scale-150 sm:scale-125 xs:scale-100"
            />
            </div>

            {/* Content Over Background */}
            <div className="relative z-10">
                <div className="p-8 text-white flex justify-center items-center xs:flex-col sm:flex-row">
                    <img
                        ref={logoRef}
                        className="sm:w-[200px] sm:h-[200px] xs:w-[150px] xs:h-[150px] object-cover justify-center items-center"
                        src="/assets/RMC.png"
                        alt="Royal Modular Cabinet Logo"
                    />
                    <h2 ref={h2Ref} className="font-great-vibes text-9xl xs:text-6xl sm:text-8xl">Kitchen Cabinets</h2>
                </div>

                {/* Image Carousel */}
                <div className="relative">
                    <ImageCarousel images={images} />
                </div>

                {/* Additional Content Section */}
                <div className="sm:pt-24 flex justify-center text-center">
                    <h2 ref={bannerRef} className="font-great-vibes text-white sm:text-7xl xs:text-5xl">
                        "Welcome to our kitchen: where memories are homemade."
                    </h2>
                </div>
            </div>
        </div>
    );
}
export default Gallery

