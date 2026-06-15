import NavItem from "./NavItem";
import logoIronFit from "../assets/photos/logoIronFit.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { menu } from "motion/react-client";
import { useState } from "react";

function Header() {

    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <>
            {menuAberto && (
                <div 
                    onClick={() => setMenuAberto(false)}
                    className="fixed inset-0 bg-black/50 z-90 md:hidden"
                />
            )}
            <motion.div
                animate={{ x: menuAberto ? 0 : "-100%" }}
                initial={{ x: "-100%"}}
                transition={{duration: 0.3}}
                className="fixed top-0 left-0 h-screen w-64 bg-black font-[Inter] z-100 flex flex-col p-10 gap-5 md:hidden"
            >
                <h1 className="text-3xl font-['Bebas_Neue'] p-2 text-center border-b border-white/50 text-white">Iron<span className="text-redFit">Fit</span></h1>

                <button onClick={() => setMenuAberto(false)} className="self-end">
                    <FontAwesomeIcon color="white" icon={faXmark}/>
                </button>

                <a onClick={() => setMenuAberto(false)} href="#home">
                    <NavItem label={"Ínicio"}/>
                </a>
                
                <a onClick={() => setMenuAberto(false)} href="#modalidades">
                    <NavItem label={"Modalidades"}/>
                </a>

                <a onClick={() => setMenuAberto(false)} href="#about">
                    <NavItem label={"Sobre"}/>
                </a>
                
                <a onClick={() => setMenuAberto(false)} href="#planos">
                    <NavItem label={"Planos"}/>
                </a>

                <a onClick={() => setMenuAberto(false)} href="#testimonial">
                    <NavItem label={"Depoimentos"}/>
                </a>
                
                <a onClick={() => setMenuAberto(false)} href="#form">
                    <NavItem label={"Contato"}/>
                </a>

            </motion.div>
            <div className="w-screen z-50 h-30 fixed shadow p-5 bg-black border border-b-white/20 md:border-0 flex justify-between items-center">
                <img className="w-15 md:hidden" src={logoIronFit} alt="" />

                <h1 className="text-3xl font-['Bebas_Neue'] text-white">IRON<span className="text-redFit">FIT</span></h1>

                <div className="hidden md:flex gap-5 items-center">
                    <a href="#home">
                        <NavItem label={"Ínicio"}/>
                    </a>

                    <a href="#modalidades">
                        <NavItem label={"Modalidades"}/>
                    </a>

                    <a href="#about">
                        <NavItem label={"Sobre"}/>
                    </a>

                    <a href="#planos">
                        <NavItem label={"Planos"}/>
                    </a>

                    <a href="#testimonial">
                        <NavItem label={"Depoimentos"}/>
                    </a>

                    <a href="#contact">
                        <NavItem label={"Contato"}/>
                    </a>

                </div>

                <a href="#contact" className="transition-all font-['Google_Sans'] hidden md:block text-white p-3 bg-redFit hover:scale-105 hover:cursor-pointer rounded-xl">
                    Agendar Aula <FontAwesomeIcon icon={faWhatsapp}/>
                </a>

                <button onClick={() => setMenuAberto(!menuAberto)} className="md:hidden">
                    <FontAwesomeIcon color="white" icon={faBars} fontSize={24}/>
                </button>
            </div>
        </>
        
    )
}

export default Header;