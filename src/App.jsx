import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import MissionVision from "./sections/MissionVision.jsx";
import Goals from "./sections/Goals.jsx";
import Gallery from "./sections/Gallery.jsx";
import Lenis from "lenis";
import {useEffect} from "react";
import Footer from "./sections/Footer.jsx";
import GoogleMaps from "./components/GoogleMaps.jsx";

function App() {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])

    return (
        <div className="max-w-screen-2xl mx-auto xs:overflow-x-hidden sm:overflow-x-visible">
            <Hero/>
            <About/>
            <MissionVision/>
            <Goals/>
            <Gallery />
            <Footer/>
            <GoogleMaps/>
        </div>

    )
}

export default App
