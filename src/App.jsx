import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import MissionVision from "./sections/MissionVision.jsx";
import Goals from "./sections/Goals.jsx";
import Gallery from "./sections/Gallery.jsx";
import Lenis from "lenis";
import {useEffect} from "react";
import Footer from "./sections/Footer.jsx";
import GoogleMaps from "./components/GoogleMaps.jsx";
import 'lenis/dist/lenis.css';

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            smoothTouch: true,
            syncTouch: true,
            direction: 'vertical',
            gestureOrientation: 'vertical',
        });

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <div className="xs:py-2 sm:py-0 max-w-screen-2xl mx-auto">
            <Hero/>
            <About/>
            <MissionVision/>
            <Goals/>
            <Gallery/>
            <Footer/>
            <GoogleMaps/>
        </div>

    )
}

export default App
