import { FaReact, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiExpress, SiPostgresql, SiReact } from "react-icons/si"

function Tecnologias(){
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
    <div className="bg-slate-300/2 p-8 gap-6 grid grid-cols-2 md:grid-cols-3">
      <h1 className="col-span-2 md:col-span-3 text-center text-3xl font-bold mb-10">Tecnologias</h1>
      {stack.map((tech,index)=>(
        <span key={index} className="flex flex-col items-center p-3 gap-2 bg-slate-600 rounded-xl transition-all duration:300 hover:bg-slate-400 hover:scale-105">
          {tech.icon}{tech.name}
        </span>
      ))}
      
    </div>
  )
}

function App() {


  return (
    <>
      <div className=' min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800 gap-6 p-8 text-white'>
        
        <div className='flex flex-col items-center justify-center font-bold bg-slate-300/2 rounded-2xl gap-6 p-6'>
          <h1 className="text-4xl md:text-6xl ">Samuel Vega</h1>
          <h2 className="text-1xl md:text-3xl ">Full-Stack Software Engineer</h2>
        </div>

        <div className="bg-slate-300/2 p-8">
          <h1>Sobre mi:</h1>
          <p className="">
            "Ingeniero de Software con un enfoque pragmático en la resolución de problemas. Mi experiencia se centra en la creación de interfaces de usuario dinámicas y sistemas robustos en el lado del servidor. Me apasiona optimizar el rendimiento, escribir código limpio y mantenible, y transformar requerimientos complejos en soluciones tecnológicas eficientes."
          </p>
        </div>

        <Tecnologias/>

        <footer className="mt-12 p-8 bg-slate-300/2 rounded-2xl border border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
        <p className="text-slate-400 text-sm font-mono">// Salta, Argentina</p>
        <p className="text-white font-bold">© 2026 Samuel Vega</p>
        </div>

        <div className="flex gap-8">
        {/* Reemplazá con tus links reales */}
        <a 
        href="https://github.com/Incahuasi123" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-amber-400 transition-colors duration-300 font-medium"
        >
        GitHub
        </a>
        <a 
        href="www.linkedin.com/in/samuel-vega-942854220" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-amber-400 transition-colors duration-300 font-medium"
        >
        LinkedIn
        </a>
        <a 
        href="mailto:samuel_kripton22@gmail.com?subject=Contacto desde Portfolio" 
        className="bg-amber-400 text-slate-900 px-4 py-1.5 rounded-lg font-bold hover:bg-white transition-all duration-300"
        >
        Contactame
        </a>
        <span className="text-xs text-slate-500 font-mono select-all">
        samuel_kripton22@gmail.com - +543873550129
        </span>
        </div>
        </footer>
      </div>
    </>
  )

  
}

export default App
