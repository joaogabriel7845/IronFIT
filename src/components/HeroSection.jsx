import { motion } from "motion/react";
import videoFit from "../assets/videos/ironFitVideo.mp4"

function HeroSection() {
    return (
        <div id="home" className="w-full h-full overflow-hidden scroll-mt-30 bg-black">
            <div className="relative h-screen">
                <video preload="none" autoPlay muted loop className="w-full h-full opacity-75 object-cover absolute inset-0">
                    <source src={videoFit} type="video/mp4" />
                </video>

                <div className="relative flex flex-col gap-2 justify-center items-center h-full">

                    <h1 className="text-6xl text-white text-center font-['Bebas_Neue'] px-4">Transforme seu corpo</h1>
                    <p className="text-3xl text-white text-center font-['Google_Sans'] px-4">Treine com quem leva sua evolução a sério.</p>
                    
                </div>


            </div>
            
        </div>
    )
}

export default HeroSection;