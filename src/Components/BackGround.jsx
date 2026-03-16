import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const BinaryColumn = ({ xOffset, delay, tick }) => {
    // Generamos la cadena inicial
    const [binaryStr, setBinaryStr] = useState("");
    const length = 18;

    // Solo actualizamos los números cuando el "tick" global cambia
    // Esto reduce los cálculos un 90%
    useEffect(() => {
        let str = "";
        for (let i = 0; i < length; i++) {
            str += Math.random() > 0.5 ? "1" : "0";
        }
        setBinaryStr(str);
    }, [tick]); // Solo cambia cuando el padre da la señal

    return (
        <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ 
                y: ["0%", "150%"], 
                opacity: [0, 1, 1, 0] 
            }}
            transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
                delay: delay,
            }}
            className="absolute font-mono flex flex-col items-center pointer-events-none transform-gpu"
            style={{ left: `${xOffset}%` }}
        >
            {binaryStr.split("").map((char, i) => (
                <span 
                    key={i} 
                    className={`text-[10px] md:text-sm transition-colors duration-300 ${
                        i === length - 1 
                        ? "text-green-400 font-bold drop-shadow-[0_0_5px_#22c55e]" 
                        : "text-white/30"
                    }`}
                >
                    {char}
                </span>
            ))}
        </motion.div>
    );
};

export default function BackGround() {
    const [tick, setTick] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Un solo intervalo para TODAS las columnas
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const interval = setInterval(() => {
            setTick(prev => prev + 1);
        }, 200); // Velocidad de mutación de los números
        return () => clearInterval(interval);
    }, []);

    const columnCount = isMobile ? 12 : 30;
    const columns = useMemo(() => Array.from({ length: columnCount }), [columnCount]);

    return (
        <div className="absolute inset-0 bg-black overflow-hidden pointer-events-none transform-gpu">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
            
            {columns.map((_, i) => (
                <BinaryColumn 
                    key={i} 
                    tick={tick} // Pasamos el pulso central
                    xOffset={(i * (100 / columnCount))} 
                    delay={i * 0.2} 
                />
            ))}
        </div>
    );
}