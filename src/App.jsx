import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Card from "./Components/Card";
import StackTech from "./Components/StackTech";
import NavBar from "./Components/NavBar";
import MailForm from "./Components/MailForm";
import BackGround from "./Components/BackGround";
import Typewriter from "./Components/Typing";
import AboutMe from "./Components/AboutMe";

function App() {


  return (
    <>
      <main className="bg-black flex flex-col min-h-screen justify-center items-center text-zinc-300">
      
        <NavBar botones={[{text:"Inicio",id:"Home"},{text:"Sobre mi",id:"AboutMe"},{text:"Tecnologias",id:"Stack"},{text:"Proyectos",id:"Proyects"},{text:"Contacto",id:"Contact"}]}/>
        
        <section id="Home" className="relative w-full h-[90vh]">
          <BackGround/>
          <div className="flex justify-center items-center h-screen w-full">
            
            <div className="transform-gpu bg-black/70 md:backdrop-blur-xs select-none flex flex-col justify-center items-center gap-10 p-10 rounded-full">
              <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter"
              >
                Samuel<span className="text-green-500">Vega</span>
              </motion.h1>
              <Typewriter/>
              <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }} // Aparece un poco después
              className="text-zinc-400 text-sm md:text-base font-mono text-center max-w-lg mt-2"
              >
                  Construyendo soluciones escalables y experiencias digitales nítidas desde Tartagal para el mundo.
              </motion.p>
            </div>
          </div>
        </section>


        <section id="AboutMe" className="w-full min-h-screen flex items-center justify-center p-6 scroll-mt-20">
          <div className="max-w-4xl w-full">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
                <span className="text-green-500 font-mono text-2xl mr-4">{">_"}</span>
                Sobre_Mí<span className="animate-pulse">_</span>
              </h2>
              <div className="h-1 w-20 bg-green-500 mt-2"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-2 space-y-6 text-zinc-400 font-mono text-sm md:text-base leading-relaxed"
              >
                <p>
                  <span className="text-white font-bold">{">"}</span> Mi viaje en el desarrollo comenzó con una curiosidad insaciable por entender cómo funcionan las cosas detrás de la pantalla. Hoy, desde <span className="text-green-400">Tartagal, Salta</span>, diseño y construyo sistemas que no solo funcionan, sino que escalan.
                </p>
                
                <p>
                  <span className="text-white font-bold">{">"}</span> Me especializo en el ecosistema <span className="text-white">Fullstack</span>, con un enfoque obsesivo en la limpieza del código y la experiencia del usuario. No me conformo con "que ande"; busco que sea eficiente, rápido y estéticamente impecable.
                </p>

                <p>
                  <span className="text-white font-bold">{">"}</span> A través de <span className="text-green-400 italic">ClickVenta</span>, he ayudado a digitalizar negocios locales, transformando procesos manuales en flujos de trabajo automatizados. Mi combustible es el aprendizaje constante y los retos técnicos que otros evitan.
                </p>

                <div className="pt-4 flex gap-4">
                    <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg">
                        <p className="text-green-500 text-xs uppercase tracking-widest mb-1 font-bold">Residencia</p>
                        <p className="text-zinc-200">Salta, Argentina</p>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg">
                        <p className="text-green-500 text-xs uppercase tracking-widest mb-1 font-bold">Enfoque</p>
                        <p className="text-zinc-200">SaaS & Soluciones Web</p>
                    </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group justify-self-center"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-900 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
                  <h3 className="text-white font-bold mb-4 border-b border-zinc-800 pb-2 font-mono text-xs uppercase">System_Info</h3>
                  <ul className="space-y-3 font-mono text-[10px] md:text-xs">
                    <li className="flex justify-between"><span className="text-zinc-500">ESTADO:</span> <span className="text-green-400 underline">DISPONIBLE</span></li>
                    <li className="flex justify-between"><span className="text-zinc-500">LOCACIÓN:</span> <span className="text-zinc-200">TARTAGAL (GMT-3)</span></li>
                    <li className="flex justify-between"><span className="text-zinc-500">EXPERIENCIA:</span> <span className="text-zinc-200">PROYECTOS REALES</span></li>
                    <li className="flex justify-between"><span className="text-zinc-500">OBJETIVO:</span> <span className="text-zinc-200 italic">FULLSTACK MASTER</span></li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        
        <section id="Stack" className="w-full p-6">
          <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
                <span className="text-green-500 font-mono text-2xl mr-4">{">_"}</span>
                Tecnologías_principales<span className="animate-pulse">_</span>
              </h2>
              <div className="h-1 w-20 bg-green-500 mt-2"></div>
            </motion.div>
          <StackTech/>
        </section>

        <section id="Proyects" className="flex flex-col w-full p-10">

          <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
                <span className="text-green-500 font-mono text-2xl mr-4">{">_"}</span>
                Proyectos_destacados<span className="animate-pulse">_</span>
              </h2>
              <div className="h-1 w-20 bg-green-500 mt-2 "></div>
          </motion.div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
            <Card linkProyecto={"https://stock.samuel-v.dev/"} image={"/Proyectos/clickVenta.webp"} text={"Sistema centralizado para el control de inventario y optimización de ventas en tiempo real. Arquitectura robusta diseñada para transformar la gestión manual en un flujo de trabajo digital eficiente y escalable para comercios locales"} tech={["#React","#Tailwind","#Supabase","#PostgreSQL"]}/>
            <Card linkProyecto={"https://samuel-v.dev/"} image={"/Proyectos/portfolio.webp"} text={"Portfolio profesional desarrollado con un enfoque en la optimización de recursos y rendimiento web. Implementación de interfaces interactivas mediante el uso eficiente de hooks de React y animaciones declarativas, logrando una experiencia de usuario fluida y liviana."} tech={["#React","#Tailwind","#Motion","#Vite"]}/>
          </div>
        </section>

        <section id="Contact" className="flex flex-col md:flex-row gap-6 p-6">
          <MailForm/>
          <AboutMe/>
        </section>
 
        <section id="Footer" className="w-full">
          <footer className="w-full border-t border-zinc-800/50 bg-black/20 backdrop-blur-md py-8 mt-20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
              
              <div className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <p className="text-zinc-400 text-xs font-mono tracking-widest uppercase">
                    Tartagal, Salta, AR // Status: Online
                  </p>
                </div>
                <p className="text-zinc-500 text-[10px] font-mono mt-1">
                  © {new Date().getFullYear()} Samuel Vega • Fullstack Engineer
                </p>
              </div>

              <div className="order-first md:order-none">
                <span className="text-zinc-200 font-mono font-bold tracking-tighter text-lg">
                    SAMUEL<span className="text-green-500">_</span>V<span className="animate-pulse">.DEV</span>
                </span>
              </div>

              <div className="flex flex-row gap-6 items-center">
                <p className="text-zinc-500 text-[10px] font-mono hidden lg:block">
                  BUILD_WITH: REACT_VITE_TAILWIND_MOTION
                </p>
                <div className="h-4 w-[1px] bg-zinc-800 hidden lg:block"></div>
                <button
                  onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}
                  className="text-zinc-400 hover:text-green-400 transition-colors text-xs font-mono uppercase tracking-tighter"
                >
                  [ Volver_al_inicio ]
                </button>
              </div>

            </div>
          </footer>
        </section>

      </main>
    </>
  )

  
}

export default App
