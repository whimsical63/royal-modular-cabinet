import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import React, {useEffect, useRef} from "react";

const About = () => {
    const h2Ref = useRef(null);
    const pRef = useRef(null);
    const imgRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            h2Ref.current,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: h2Ref.current,
                    start: "top 90%",
                    toggleActions: "play none restart reverse",
                },
            },
        );

        gsap.fromTo(
            pRef.current,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: pRef.current,
                    start: "top 85%",
                    toggleActions: "play none restart reverse",
                },
            }
        );

        gsap.fromTo(
            imgRef.current,
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
                    trigger: imgRef.current,
                    start: "top 85%",
                    toggleActions: "play none restart reverse",
                },
            },
        );

    }, []);


    return (
        <section className="w-full flex flex-col sm:flex-row my-10">
            {/* First div */}
            <div className="relative sm:w-1/2 xs:h-[500px] sm:h-auto xs:order-last sm:order-1">
                <img
                    ref={imgRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/assets/hero.png"
                    alt="Hero Image"
                />
            </div>
            {/* Second div */}
            <div
                className="relative sm:px-20 xs:px-10 my-10 flex flex-col xs:items-center sm:items-start sm:w-1/2 sm:order-last xs:order-1"> {/* sm:w-1/2 ensures 50% width on medium screens */}
                <div className="flex items-center">
                    <h2 ref={h2Ref} className="font-great-vibes xl:text-7xl md:text-6xl xs:text-5xl text-white">About Us</h2>
                </div>
                <div ref={pRef} className="mt-6 me-2 text-justify xs:text-lg sm:text-xl">
                    <p className="ms-8 font-forum text-white">
                        Royal Modular Cabinet is a provider of innovative and customizable modular cabinet solutions,
                        dedicated to transforming spaces into functional and stylish environments. With a commitment to
                        quality, durability, and aesthetics, we specialize in designing and manufacturing cabinets for
                        kitchens, closets, offices, and other living and working areas.
                    </p>
                    <p className="ms-8 font-forum text-white mt-5">
                        Our products are crafted using high-quality materials and modern design techniques, ensuring
                        they meet the diverse needs of our customers. Whether you’re seeking to optimize a small space
                        or create a luxurious and organized environment, our modular systems offer the flexibility and
                        style to bring your vision to life.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default About
