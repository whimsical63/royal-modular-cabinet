import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";

const GoogleMaps = () => {
    const mapRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        gsap.fromTo(
            mapRef.current,
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                duration: 1,
                opacity: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: mapRef.current,
                    start: "top 95%",
                    toggleActions: "play none restart reverse",
                },
            },
        );

    }, []);



    return (
        <div className="mb-6">
            <div ref={mapRef} className="w-full px-5">
                <h3 className="xs:mx-5 text-center lg:mx-auto font-forum text-6xl sm:text-6xl text-white">Location</h3>
                <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                        className="rounded-lg"
                        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Barangay%20Poblacion%20Muntinlupa%20City+(Royal%20Modular%20Cabinet)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
            </div>
        </div>
    )
}
export default GoogleMaps
