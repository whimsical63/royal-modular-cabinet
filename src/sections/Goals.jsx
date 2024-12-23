import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


const Goals = () => {
    const pRef = useRef(null);
    const h2Ref = useRef(null);
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
                    src="/assets/goal.jpg"
                    alt="Hero Image"
                />
            </div>
            {/* Second div */}
            <div
                className="relative sm:px-20 xs:px-10 my-10 flex flex-col xs:items-center sm:items-start sm:w-1/2 sm:order-last xs:order-1"> {/* sm:w-1/2 ensures 50% width on medium screens */}
                <div className="flex items-center">
                    <h2 ref={h2Ref} className="font-great-vibes xl:text-7xl md:text-6xl xs:text-5xl text-white">Our
                        Goal</h2>
                </div>
                <div className="mt-6 me-2 text-justify xs:text-lg sm:text-xl">
                    <p ref={pRef} className="ms-8 font-forum text-white">
                        Our goal is to position Royal Modular Cabinet as a market leader in modular cabinetry, known for
                        our innovative designs, exceptional customer service, and sustainable practices. We are
                        committed to achieving a consistent customer satisfaction score of 95% and personalized customer
                        experiences with plans capitalizing on global demand for modular storage solutions. We aim for a
                        50% reduction in our environmental footprint through the use of eco-friendly materials and a
                        zero-waste production process. Offering smart storage solutions for modern homes and offices. We
                        are also focused on fostering a strong company culture, promoting employee satisfaction and
                        growth, to build a motivated and skilled team. With these goals, we aim to revolutionize the
                        modular cabinet industry while driving sustained growth and customer loyalty.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Goals
