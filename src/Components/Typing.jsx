import { useState, useEffect } from "react";

const phrases = [
  "Desarrollador Front-End",
  "Desarrollador Back-End",
  "Desarrollador Fullstack."
];

export default function Typewriter() {
  const [index, setIndex] = useState(0); 
  const [subIndex, setSubIndex] = useState(0); 
  const [reverse, setReverse] = useState(false); 
  const [blink, setBlink] = useState(true);
  const [isDone, setIsDone] = useState(false); // El interruptor final

  // Definimos dónde ponemos el torniquete (la longitud de "Desarrollador ")
  const baseText = "Desarrollador ";
  const stopIndex = baseText.length; 

  // Lógica del cursor parpadeante
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Lógica de escritura/borrado
  useEffect(() => {
    // Si el paciente ya es Fullstack, soltamos el bisturí
    if (isDone) return;

    // Caso 1: Terminó de escribir la frase completa
    if (subIndex === phrases[index].length && !reverse) {
      // Si es la última frase, declaramos el alta médica
      if (index === phrases.length - 1) {
        setIsDone(true);
        return;
      }
      // Si no, esperamos 2 segundos y empezamos a borrar
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    // Caso 2: Terminó de borrar, pero SOLO hasta el torniquete (stopIndex)
    if (subIndex === stopIndex && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1); // Pasamos a la siguiente especialidad
      return;
    }

    // El motor de tipeo con velocidad humana
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 120 - Math.random() * 80, 40)); 

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, isDone, stopIndex]);

  // --- LÓGICA DE COLORES Y SEPARACIÓN ---
  // Agarramos lo que se ha escrito hasta ahora
  const currentText = phrases[index].substring(0, subIndex);
  // Lo partimos en dos pedazos basados en el stopIndex
  const part1 = currentText.substring(0, stopIndex); // Lo blanco
  const part2 = currentText.substring(stopIndex);    // Lo verde

  return (
    <div className="flex items-center font-mono md:text-2xl select-none">
      {/* El prompt inicial */}
      <span className="text-white font-bold mr-3">{`>_`}</span>
      <div>
      {/* La base intacta en blanco */}
      <span className="text-white">{part1}</span>
      
      {/* La especialidad en verde */}
      <span className="text-green-400 font-bold">{part2}</span>
      </div>
      
      {/* El cursor */}
      <span className={`${blink ? "opacity-100" : "opacity-0"} inline-block w-2 h-6 bg-green-500 ml-1`}></span>
    </div>
  );
}