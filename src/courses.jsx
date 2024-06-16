// eslint-disable-next-line no-unused-vars
import React from "react";
import { useRef } from "react";
import Clogo from "./assets/C logo.png"
import Pytho from "./assets/pytho.png"
import gsap from 'gsap' 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'
import "./App.css"
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)

export default function CourseComp(){

    const headingRef = useRef(null)

    useGSAP(()=>{
        // eslint-disable-next-line no-unused-vars
        const mytext = new SplitType('#courseHead')
        // const subHead = new SplitType('#firstSubHead')
        // eslint-disable-next-line no-unused-vars
        let tl = gsap.timeline()

        // tl.from('#courseHead .char', {
        //     scrollTrigger: {
        //         trigger: headingRef.current,
        //         start: 'top bottom-=200',
        //         end: 'bottom top',
        //         // scrub: true,
        //         markers:true,
        //         toggleActions:"restart" 
        //     },
        //         y: -8,   
        //         stagger:0.01,     
        //         opacity: 0,      
        //         duration: 1,   
        //         // delay: 0.05,    
        //         ease: "power4",
        // });
        // tl.from('#card', {
        //     scrollTrigger: {
        //         trigger: headingRef.current,
        //         start: 'top bottom-=200',
        //         end: 'bottom top',
        //         // scrub: true,
        //         markers:true,
        //         toggleActions:"restart none none restart"
        //     },
        //         height:0,
        //         // stagger:0.01,     
        //         opacity: 0,      
        //         duration: 1,   
        //         delay: 0.5,    
        //         ease: "power4",
        // });
    })
    
    const goToForm = () => {
        window.open("https://docs.google.com/forms/d/1iioRXjOer1ELpCO6h68IqcwtmuFMG7g7p-rfW-hcBB0/viewform?pli=1&pli=1&edit_requested=true", "_blank");
      };

    return(
        <div id="courses" className="flex flex-col gap-16 justify-center items-center py-12">
            <h1 id="courseHead" ref={headingRef} className="h1Normal text-center px-4 md:text-6xl text-4xl">Courses that will redefine <br/>your <snap className="h1Grad2 text-purple-700">Approach to Coding</snap> </h1>
            
            <div id="card" className="flex flex-col gap-2 mx-4 ring-1 ring-stone-200 shadow-sm  max-w-[700px] px-4 py-4 bg-stone-100 bg-opacity-30 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-4  " ><img className="h-12 md:h-20" src={Clogo} alt=""/> <h3 className="readex-400 text-stone-800 md:text-2xl text-xl">C Programming course</h3></div>
                <p className="px-2 readex-300 md:text-xl text-lg text-stone-600">The course curriculum is structured to provide you
                    with a solid foundation in the language</p>
                <p className="px-2 readex-400 text-lg md:text-xl text-stone-500">Beginner-friendly · Target-based · Certification</p>
                <div className="flex items-center justify-between mt-4 px-2">
                    <p className="readex-300 text-sm text-lime-700">Discounts for early registrations</p>
                    <button onClick={goToForm} className="bg-sky-300 rounded-md px-6 py-2" >Enroll  now!</button>
                </div>
            </div>
            <div id="card" className="flex flex-col gap-2 mx-4 ring-1 ring-stone-200 shadow-sm  max-w-[700px] px-4 py-4 bg-stone-100 bg-opacity-30 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-4  " ><img className="h-12 md:h-20" src={Pytho} alt=""/> <h3 className="readex-400 text-stone-800 md:text-2xl text-xl">Python Programming course</h3></div>
                <p className="px-2 readex-300 md:text-xl text-lg text-stone-600">The course curriculum is structured to provide you
                    with a solid foundation in the language</p>
                <p className="px-2 readex-400 text-lg md:text-xl text-stone-500">Beginner-friendly · Target-based · Certification</p>
                <div className="flex items-center justify-between mt-4 px-2">
                    <p className="readex-300 text-sm text-lime-700">Discounts for early registrations</p>
                    <button onClick={goToForm} className="bg-sky-300 rounded-md px-6 py-2" >Enroll  now!</button>
                </div>
            </div>

            <p className=" readex-300 text-xl text-stone-600">Many more courses to come!</p>
           
        </div>
    )
}