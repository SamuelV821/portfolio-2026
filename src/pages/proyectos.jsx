export function Proyectos() {
  const proyectos = [
    {
      title: "ClickVenta",
      description: "SaaS de gestión de stock y ventas para comercios minoristas. Desarrollado en tiempo récord para digitalizar negocios locales.",
      features: ["Autenticación con Supabase", "Integración con MercadoPago", "Reportes en tiempo real", "SLA y Términos Legales"],
      tech: ["React", "Tailwind", "Supabase", "PostgreSQL"],
      link: "https://stock.samuel-v.dev", // Tu nueva URL pro
      status: "En Producción"
    }
  ];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-bold ml-2 italic">Proyectos Destacados</h2>
      {proyectos.map((p, i) => (
        <div key={i} className="bg-slate-300/2 border border-white/5 p-8 rounded-3xl flex flex-col md:flex-row gap-8 hover:border-amber-400/30 transition-all duration-500">
          <div className="flex-1">
            <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
               <span className="bg-emerald-500 text-slate-900 text-xs font-black px-2 py-1 rounded-md uppercase tracking-tighter">
                {p.status}
              </span>
              <h3 className="text-4xl font-black text-amber-400 uppercase tracking-tighter">{p.title}</h3>
            </div>
            <p className="text-slate-300 mb-6 text-lg italic leading-relaxed">
              "{p.description}"
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((t, idx) => (
                <span key={idx} className="text-xs font-mono bg-slate-800 px-2 py-1 rounded border border-white/10 text-slate-400">
                  #{t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 min-w-[200px]">
            <a 
              href={p.link} 
              target="_blank" 
              className="bg-white text-slate-900 text-center py-3 rounded-xl font-bold hover:bg-emerald-500 transition-all duration-300 shadow-lg"
            >
              Ver Proyecto
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}