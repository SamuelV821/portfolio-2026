import { motion } from "motion/react";
import { span } from "motion/react-client";

export default function Card({image,text,tech,linkProyecto}){
    return (

        <motion.div 

        initial={{opacity:0, y:10}}
        whileInView={{opacity:1, y:0, transition:{duration:1}}}
        viewport={{ once: true, amount: 0.5 }}


        className="bg-zinc-500 w-full flex flex-col gap-6 p-6 rounded-sm" >
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-zinc-800">
            <a href={linkProyecto} target="_blank" rel="noopener noreferrer">
                <img 
                src={image} 
                className="w-full h-full object-cover" 
                alt="Preview" 
                />
            </a>
        </div>
            <p>{text}</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                {tech.map((item,index)=>(
                    <span key={index} className="hover:text-green-500">{item}</span>
                ))}
            </div>
            
        </motion.div>
    );
}