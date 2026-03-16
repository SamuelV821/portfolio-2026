import { motion } from "motion/react";
import { useState, useEffect } from "react";

const BinaryColumn = ({ xOffset }) => {
    const [binaryStr, setBinaryStr] = useState("");
    const columnLength = 18; // Un poco más largas para que llenen más

    useEffect(() => {
        const interval = setInterval(() => {
            let str = "";
            for (let i = 0; i < columnLength; i++) {
                str += Math.random() > 0.5 ? "1" : "0";
            }
            setBinaryStr(str);
        }, 120); // Un poco más rápido el cambio
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ 
                y: ["0vh", "120vh"], 
                opacity: [0, 1, 1, 0] 
            }}
            transition={{
                duration: Math.random() * 4 + 4, // Lluvia un poco más veloz
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
            }}
            className="absolute font-mono flex flex-col items-center pointer-events-none"
            style={{ left: `${xOffset}%` }}
        >
            {binaryStr.split("").map((char, i) => {
                const isLast = i === binaryStr.length - 1;
                return (
                    <span 
                        key={i} 
                        className={`
                            text-sm md:text-base transition-colors duration-150
                            ${isLast 
                                ? "text-green-500 font-bold drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" 
                                : "text-white/40" // Blanco con ligera transparencia para que el verde resalte
                            }
                        `}
                    >
                        {char}
                    </span>
                );
            })}
        </motion.div>
    );
};

export default function BackGround() {
    // Aumentamos a 40 columnas para que se note realmente la "lluvia"
    const columns = Array.from({ length: 40 });

    return (
        // Fondo negro puro (bg-black)
        <div className="absolute inset-0 bg-black overflow-hidden pointer-events-none">
            {/* Gradiente sutil para que los números no mueran tan de golpe al final */}
            <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black z-2" />
            
            {columns.map((_, i) => (
                <BinaryColumn key={i} xOffset={i * 2.5} />
            ))}
        </div>
    );
}