import { motion } from "motion/react";

export default function Button({text,onClick}){


    return(
            <motion.button 
            
            initial={{opacity: 0, y:10}}
            animate={{opacity: 1, y:0, transition:{duration:1} }}
            
            transition={{
                type:"spring",
                stiffness: 600,
                damping: 30
            }}

            whileHover={{backgroundColor: "#22c55e"}}

            whileTap={{ 
                scale: 0.9,
                backgroundColor: "#064e3b",
                rotate: "0.5deg" 
            }}


            className="
            bg-zinc-800
            text-white
            font-bold
            w-full
            pl-6 pr-6 p-3
            rounded-2xl "
            onClick={onClick}>{text}</motion.button>
    );

}