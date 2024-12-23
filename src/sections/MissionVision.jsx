import {useEffect, useRef} from "react";
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";



const MissionVision = () => {
    const h2Ref1 = useRef(null);
    const pRef1 = useRef(null);
    const h2Ref2 = useRef(null);
    const pRef2 = useRef(null);
    const imgRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            h2Ref1.current,
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
                    trigger: h2Ref1.current,
                    start: "top 85%",
                    toggleActions: "play none restart reverse",
                },
            },
        );

        gsap.fromTo(
            pRef1.current,
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
                    trigger: pRef1.current,
                    start: "top 80%",
                    toggleActions: "play none restart reverse",
                },
            }
        );


        gsap.fromTo(
            h2Ref2.current,
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
                    trigger: h2Ref2.current,
                    start: "top 85%",
                    toggleActions: "play none restart reverse",
                },
            },
        );

        gsap.fromTo(
            pRef2.current,
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
                    trigger: pRef2.current,
                    start: "top 85%",
                    toggleActions: "play none restart reverse",
                },
            }
        );

        gsap.fromTo(
            imgRef.current,
            {
                x: 100,
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
        <section className="w-full flex flex-col sm:flex-row mt-10">
            {/* First div */}
            <div
                className="relative px-20 xs:px-10 my-10 flex flex-col xs:items-center sm:items-start sm:w-1/2 sm:order-1 xs:order-last"> {/* sm:w-1/2 ensures 50% width on medium screens */}
                <div className="flex items-center">
                    <h2 ref={h2Ref1} className="font-great-vibes xl:text-7xl md:text-6xl xs:text-5xl text-white">Our Mission</h2>
                    <div className="flex flex-col">
                    </div>
                </div>
                <div className="mt-6 me-2 text-justify xs:text-lg sm:text-xl">
                    <p ref={pRef1} className="ms-8 font-forum text-white">
                        "To provide innovative, high-quality, and customizable modular cabinet solutions that maximize
                        space, enhance functionality, and cater to the unique needs of every customer, while ensuring
                        exceptional craftsmanship and sustainability in every product."
                    </p>
                </div>
                <div className="mt-10 flex items-center">
                    <h2 ref={h2Ref2} className="font-great-vibes xl:text-7xl md:text-6xl xs:text-5xl text-white">Our Vision</h2>
                    <div className="flex flex-col">
                    </div>
                </div>
                <div className="me-2 text-justify xs:text-lg sm:text-xl">
                    <p ref={pRef2} className="ms-8 mt-8 font-forum text-white ">
                        “To become the leading provider of modular cabinet, recognized for our commitment to excellence,
                        eco-friendly practices, and transforming living and working spaces into functional, aesthetic,
                        and organized environments."
                    </p>
                </div>
            </div>
            <div className="relative sm:w-1/2 xs:h-[500px] sm:h-auto xs:order-last sm:order-1">
                <img
                    ref={imgRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/assets/missionvision.png"
                    alt="Hero Image"
                />
            </div>
        </section>
    );
};

export default MissionVision;




