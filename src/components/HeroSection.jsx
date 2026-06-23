import { motion } from "motion/react";
import videoFit from "../assets/videos/ironFitVideo.mp4"
import { useEffect, useRef } from "react";

function HeroSection() {

    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                video.play()
            } else {
                video.pause()
            }
        }, { threshold: 0.2 })

        observer.observe(video)
        return () => observer.disconnect()
    }, [])


    return (
        <div id="home" className="w-full h-full overflow-hidden scroll-mt-30 bg-black">
            <div className="relative h-screen">
                <video ref={videoRef} preload="none" muted loop className="w-full h-full opacity-75 object-cover absolute inset-0">
                    <source src={videoFit} type="video/mp4" />
                </video>

                <div className="relative flex flex-col gap-2 justify-center items-center h-full">

                    <h1 className="text-5xl md:text-6xl text-white text-center font-['Bebas_Neue'] px-4">Transforme seu corpo</h1>
                    <p className="text-xl md:text-3xl text-white text-center font-['Google_Sans'] px-4">Treine com quem leva sua evolução a sério.</p>
                    
                </div>


            </div>
            
        </div>
    )
}

export default HeroSection;