import React, { useEffect,useRef } from "react";
import gsap from 'gsap'
import SplitType from 'split-type'
import "./App.css"
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);


export default function HomeComp(){

    useGSAP(()=>{
        const mytext = new SplitType('#firstHead')
        const subHead = new SplitType('#firstSubHead')
        let tl = gsap.timeline()

        tl.from('#firstHead .char, #firstSubHead .word',{
                y: -8,   
                stagger:0.025,     
                opacity: 0,      
                duration: 0.5,   
                delay: 0.05,    
                marker:false,
                ease: "power4",
           
        })
    })
    
    const goToForm = () => {
        window.open("https://docs.google.com/forms/d/1iioRXjOer1ELpCO6h68IqcwtmuFMG7g7p-rfW-hcBB0/viewform?pli=1&pli=1&edit_requested=true", "_blank");
      };

    return(
        <div className="flex flex-col gap-20 my-32 text-center  py-2  items-center justify-between" id="home   ">
            <h1 id="firstHead" className="h1Normal text-center px-4 md:text-6xl text-4xl">
                Mastery of Fundamentals,<br/>Taught by <span className="text-sky-500"> Industry Experts</span> </h1>

            <p id="firstSubHead" className="subHead readex-400 text-stone-600 px-2 text-xl">We are offering a comprehensive C & Python programming course,<br/>
                available both online and offline.</p> 

            <button onClick={goToForm} className="shadow-md rounded-md px-12 py-4 readex-500 text-stone-700 bg-sky-300  transition-all duration-300"> Enroll Now!</button>
        </div>
    )
}