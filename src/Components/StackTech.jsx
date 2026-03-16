import { FaReact, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiExpress, SiPostgresql, SiReact } from "react-icons/si"
import { motion } from "motion/react"

export default function StackTech(){
  const stack = [
    {name:'HTML5', icon:<FaHtml5 size={50}/>},
    {name:'CSS3', icon:<FaCss3 size={50}/>},
    {name:'JavaScript', icon:<SiJavascript size={50}/>},
    {name:'React', icon:<SiReact size={50}/>},
    {name:'TailWindCSS', icon:<SiTailwindcss size={50}/>},
    {name:'Node.Js', icon:<FaNodeJs size={50}/>},
    {name:'Express.js', icon:<SiExpress size={50}/>},
    {name:'PostgreSQL', icon:<SiPostgresql size={50}/>}

  ]

  return (
    <motion.div

    initial={{opacity:0,y:10}}
    whileInView={{opacity:1,y:0,transition:{duration:1}}}
    viewport={{once:true, amount:0.5}}

    className="bg-zinc-600 w-full p-8 gap-6 grid grid-cols-2 md:grid-cols-3 rounded-sm">
      <h1 className="col-span-2 md:col-span-3 text-center text-3xl font-black italic mb-10">Tecnologias</h1>
      {stack.map((tech,index)=>(
        <motion.span
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        transition={{duration:0.4, delay:index*0.15, ease: "easeOut"}}
        
        
        key={index} className="flex flex-col items-center p-3 gap-2 bg-zinc-800 rounded-xl transition-all duration:300 hover:bg-green-500/50 hover:scale-105">
          {tech.icon}{tech.name}
        </motion.span>
      ))}
      
      
    </motion.div>
  )
}