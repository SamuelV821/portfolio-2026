import { motion } from "motion/react";
import { div, form } from "motion/react-client";
import { useState } from "react";
import Button from "./Button";


export default function MailForm(){
    const forms = {
        hidden: {opacity:0,x:-50},
        visible: {opacity:1,x:0}
    }

    const labels = {
        hidden: {opacity:0, y:10},
        visible: {opacity:1, y:0}
    }
    const inputs = {
        hidden: {opacity:0, x:10},
        visible: {opacity:1, x:0}
    }
    
    return(
        <motion.div
        variants={forms}
        initial={"hidden"}
        whileInView={"visible"}
        transition={{duration:0.3, when:"beforeChildren"}}
        viewport={{once:true, amount:0.5}}
        
        className="bg-zinc-600 md:w-[60vh] h-fit gap-10 pl-2 pr-2 rounded-sm">
            <div className="flex justify-center items-center border-b p-4 italic font-black text-2xl"><span>Contactame</span></div>
            <form className="flex flex-col justify-center items-center p-4 gap-6 w-full">
                <motion.label variants={labels} className="font-bold">Tu nombre</motion.label>
                <motion.input variants={inputs} type="text" className="w-6/10 border rounded-sm pl-1 pr-1 bg-zinc-800" />
                <motion.label variants={labels} className="font-bold">Tu E-mail</motion.label>
                <motion.input variants={inputs} type="mail" className="w-6/10 border rounded-sm pl-1 pr-1 bg-zinc-800" />
                <motion.label variants={labels} className="font-bold">Deja tu mensaje</motion.label>
                <motion.textarea variants={inputs} className="w-full border rounded-sm pl-1 pr-1 bg-zinc-800"/>

                <Button text={"Enviar"} onClick={(e)=>e.preventDefault()}/>
            </form>
        </motion.div>
    );
}