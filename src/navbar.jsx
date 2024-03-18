import React from "react";
import { useEffect, useRef } from "react";
import hcLight from "./assets/hcLight.png"
import "./App.css"
import SplitType from 'split-type'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);

export default function NavBar(){

    useGSAP(()=>{
        gsap.from('#navbar',{
            opacity:0,
            stagger:0.05,
            y:-50
        })
    })

    return(
        <nav className="h-18 md:px-16 md:py-4 px-4 py-2 w-full bg-transparent bg-opacity-50  backdrop-blur-md flex md:justify-between justify-between items-center  top-0 z-10 sticky" id="navbar">
            <div className="flex gap-12 items-center">
            <span class="md:hidden material-symbols-outlined">
                drag_handle
                </span>
               <img id="logo" className="h-4"  src={hcLight} alt="" />
               <ul id="menus" className="md:flex md:gap-6 readex-400 text-stone-600 hidden md:visible ">
                <li className="cursor-pointer hover:text-sky-600"><a href="#courses">Courses</a></li>
                <li className="cursor-pointer hover:text-sky-600"><a href="#trainer"> Trainer</a></li>
                <li className="cursor-pointer hover:text-sky-600"><a href="#about">About</a> </li>
                <li className="cursor-pointer hover:text-sky-600"><a href="#contact"> Contact</a></li>
               </ul>
            </div>
            <div id="signing" className="flex gap-6 items-center  readex-400 text-stone-600">
                <button>Sign Up</button>
                <button className="ring-1 px-4 rounded-sm bg-sky-500 text-stone-100 items- py-1">Log In</button>
            </div>
        
        </nav>
        
        

    )
}