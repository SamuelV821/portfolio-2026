import { motion } from "motion/react"; // La nueva forma limpia
import { useState } from "react";
import Button from "./Button";

export default function MailForm() {
    const [status, setStatus] = useState("idle");
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === "loading") return;
        
        setStatus("loading");

        try {
            const response = await fetch("https://mailworker.samuel-kripton22.workers.dev/", { // <--- TU URL REAL AQUÍ
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ nombre: "", email: "", mensaje: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    const forms = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
    const labels = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } };
    const inputs = { hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } };

    return (
        <motion.div
            variants={forms}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3, when: "beforeChildren" }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-zinc-600 md:w-[60vh] h-fit gap-10 pl-2 pr-2 rounded-sm"
        >
            <div className="flex justify-center items-center border-b p-4 italic font-black text-2xl">
                <span>Contactame</span>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-4 gap-6 w-full">
                <motion.label variants={labels} className="font-bold">Tu nombre</motion.label>
                <motion.input 
                    required
                    variants={inputs} 
                    type="text" 
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-6/10 border rounded-sm pl-1 pr-1 bg-zinc-800 text-white outline-none focus:border-blue-500" 
                />

                <motion.label variants={labels} className="font-bold">Tu E-mail</motion.label>
                <motion.input 
                    required
                    variants={inputs} 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-6/10 border rounded-sm pl-1 pr-1 bg-zinc-800 text-white outline-none focus:border-blue-500" 
                />

                <motion.label variants={labels} className="font-bold">Deja tu mensaje</motion.label>
                <motion.textarea 
                    required
                    variants={inputs} 
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    className="w-full border rounded-sm pl-1 pr-1 bg-zinc-800 text-white outline-none focus:border-blue-500 h-32"
                />

                <Button 
                    text={status === "loading" ? "Enviando..." : "Enviar"} 
                    type="submit"
                />

                {/* Feedback visual para el usuario */}
                {status === "success" && (
                    <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-green-400 font-bold mt-2">
                        ¡Mensaje enviado!
                    </motion.p>
                )}
                {status === "error" && (
                    <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-red-400 font-bold mt-2">
                        Algo salió mal. Inténtalo de nuevo.
                    </motion.p>
                )}
            </form>
        </motion.div>
    );
}