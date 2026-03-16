import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function AboutMe(){
    const forms = {
        hidden: {opacity:0,x:50},
        visible: {opacity:1,x:0}
    }
    const labels = {
        hidden: {opacity:0, y:10},
        visible: {opacity:1, y:0}
    }

    return(
        <motion.div

        variants={forms}
        initial={"hidden"}
        whileInView={"visible"}
        transition={{duration:0.3, when:"beforeChildren"}}
        viewport={{once:true, amount:0.8}}
                
        className="bg-zinc-600 md:w-[60vh] h-fit gap-10 pl-2 pr-2 rounded-sm">
            <div className="flex justify-center items-center border-b p-4 italic font-black text-2xl"><span>Conoceme</span></div>
            <div className="flex flex-col justify-center items-baseline gap-10 p-6">
                
                <motion.div variants={labels} className="flex flex-row gap-3 justify-center items-center text-xl text-zinc-400 hover:text-[#0077b5] transition-colors">
                    <a href={"https://www.linkedin.com/in/samuel-vega-942854220/"} target="_blank" rel="noopener noreferrer" className="flex flex-row select-none"><FaLinkedin/><span>Linkedin</span></a>
                </motion.div>
                <motion.div variants={labels} className="flex flex-row gap-3 justify-center items-center text-xl text-zinc-400 hover:text-white transition-colors">
                    <a href={"https://github.com/SamuelV821"} target="_blank" rel="noopener noreferrer" className="flex flex-row select-none"><FaGithub/><span>GitHub</span></a>
                </motion.div>
                <motion.div variants={labels} className="flex flex-row gap-3 justify-center items-center text-xl text-zinc-400 hover:text-white transition-colors" >
                    <a href="/CV_Samuel_Vega.pdf" download="CV_Samuel_Vega.pdf" className="flex flex-row select-none" ><FiDownload/><span>Curriculum</span></a>
                </motion.div>
                
            </div>
            
        </motion.div >
    );
}