import {useEffect, useRef} from 'react'
import {gsap} from 'gsap';

const Hero = () => {
    const logoRef = useRef(null);
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const h2Ref2 = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline();

        // Split the text into spans and wrap each character in a span
        const text = h2Ref2.current;
        const characters = text.innerText.split("");
        text.innerHTML = characters.map(char => `<span>${char}</span>`).join("");

        timeline.fromTo(
            logoRef.current,
            {
                opacity: 0,      // Starting opacity (fully transparent)
                rotation: 0,     // Starting rotation (no rotation)
                x: -100,         // Starting horizontal position (move from the left)
            },
            {
                opacity: 1,      // Ending opacity (fully visible)
                rotation: 360,   // Ending rotation (360 degrees)
                x: 0,            // Ending horizontal position (move to x = 0)
                duration: 1,     // Duration of the animation (1 second)
            }
        )
            .fromTo(
                (h1Ref.current),
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                },
                "-=0.5" // Makes the h1 animation start half a second earlier than the previous animation
            )
            .fromTo(
                h2Ref.current,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                },
                "-=0.5" // Makes the h2 animation start half a second earlier than the previous animation
            );

        gsap.fromTo(
            h2Ref2.current.querySelectorAll("span"),
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                stagger: 0.05, // Delay between each character animation
                duration: 1,
            }
        );

        gsap.fromTo(
            imgRef.current,
            {
                scale:0.5,
                duration: 0.5,
                opacity: 0,
                ease: "back.out"
            },
            {
                scale: 1,
                duration: 1,
                opacity: 1,
                ease: "power2.out"
            },
        );


    }, []);


    return (
        <section className="w-full flex flex-col sm:flex-row">
            {/* First div */}
            <div
                className="px-10 py-10 flex flex-col sm:w-1/2 xs:w-full"> {/* sm:w-1/2 ensures 50% width on medium screens */}
                <div className="flex md:flex-row xs:flex-col sm:items-center xs:items-center">
                    <img
                        ref={logoRef}
                        className="sm:w-[178px] sm:h-[198px] xs:w-[150px] xs:h-[150px] object-cover justify-center items-center"
                        src="/assets/RMC.png"
                        alt="Royal Modular Cabinet Logo"
                    />
                    <div className="mx-5 flex flex-col md:items-center sm:items-center xs:items-center">
                        <h1 ref={h1Ref} className="font-forum text-5xl font-bold text-white xs:text-center">ROYAL MODULAR CABINET</h1>
                        <h2 ref={h2Ref} className="font-forum text-2xl text-white sm:text-center">Barangay Poblacion, Muntinlupa City</h2>
                    </div>
                </div>
                <div className="mt-16">
                    <h2 ref={h2Ref2} className="ms-2 xl:text-7xl md:text-6xl xs:text-5xl xs:text-center text-white font-great-vibes">
                        “We build and design your preferred cabinets, tailored and suit your style and needs”
                    </h2>
                </div>
            </div>
            <div className="relative sm:w-1/2 xs:h-[500px] sm:h-auto">
                <img
                    ref={imgRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/assets/front.png"
                    alt="Hero Image"
                />
            </div>
        </section>
    )
}
export default Hero
