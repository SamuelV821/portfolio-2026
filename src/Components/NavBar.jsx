import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";

export default function NavBar({botones}){
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (id) => {
        if (id === "Home") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const element = document.getElementById(id);
        const navBarHeight = document.querySelector('nav').offsetHeight; // Calculamos la altura real

        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navBarHeight; // Restamos la NavBar

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    }, [isOpen]);

    return(
        <nav className="bg-zinc-400/50 md:backdrop-blur-md w-full h-[10vh] flex flex-row gap-10 p-4 justify-between md:justify-baseline items-center sticky top-0 z-100 transform-gpu translate-z-0">
            <div className="flex flex-row w-fit pl-6 pr-6 font-bold text-2xl">
                <button onClick={()=>{handleScroll("Home"); setIsOpen(false)}}><span>{"<"}</span><span>SamuelVega</span><span>{"/>"}</span></button>
            </div>
            <div className="hidden md:flex flex-row gap-6 justify-center items-center w-full">
                {botones.map((boton,index)=>(
                    <button className="hover:text-green-500" key={index} onClick={()=>handleScroll(boton.id)}>{boton.text}</button>
                ))}
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 z-110">
                <motion.div 
                    animate={isOpen ? {rotate:45, y:8}:{rotate:0, y:0}}
                    transition={{duration:0.1}}
                    className="w-8 h-0.5 bg-white" 
                />
                <motion.div 
                    animate={isOpen ? {opacity:0}:{opacity:1}}
                    transition={{duration:0.1}}
                    className="w-8 h-0.5 bg-white" 
                />
                <motion.div 
                    animate={isOpen ? {rotate:-45, y:-8}:{rotate:0, y:0}}
                    transition={{duration:0.1}}
                    className="w-8 h-0.5 bg-white" 
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }}    
                        exit={{ opacity: 0, y: -20 }}     
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-[10vh] left-0 w-full h-[90vh] bg-zinc-950/95 backdrop-blur-xl z-[-1] flex flex-col items-center justify-center gap-10 md:hidden"
                    >
                        {botones.map((boton, idx) => (
                            <motion.button
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => {
                                    handleScroll(boton.id);
                                    setIsOpen(false);
                                }}
                                className="text-3xl font-light text-zinc-100 hover:text-blue-500 transition-colors"
                            >
                                {boton.text}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>


        </nav>
    );
}