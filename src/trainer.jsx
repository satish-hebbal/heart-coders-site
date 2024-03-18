import React from "react";
import Mallan from './assets/mall.jpg'

export default function Trainer(){

    const LinkedIn = () => {
        window.open("https://www.linkedin.com/in/mallanagoudapatil/", "_blank");
      };
   
    return(
        <div id="trainer" className="flex flex-col gap-24 justify-center items-center py-12 mb-24">
            <h1 className="h1Normal text-center px-4 md:text-6xl text-4xl">Learn by a seasoned
                <br/><snap className="h1Grad2">Software Architect</snap> </h1>
            
            <div className=" hidden md:flex gap-4  ring-1 ring-stone-200 shadow-sm  max-w-[700px] px-4 py-4 bg-stone-100 bg-opacity-30 rounded-lg backdrop-blur-sm">
                <div><img className="max-h-44 object-cover max-w-44 rounded-md" src={Mallan} alt="" /></div>
                <div className="flex flex-col gap-2 justify-between">
                    <div className="flex flex-col gap-1">
                    <h1 className=" readex-500 text-xl text-stone-700">Mallanagouda Patil</h1>
                    <p className="readex-300 text-sm text-stone-700">BE(cs) Ms(cs) Software Architect
                        20+ years of Software development experience in top product
                        based MNCs</p>
                    </div>
                    <p className="readex-400 text-md text-stone-700 mt-2">"Believing in the importance of fundamentals, let's
                            master the building blocks of coding together."</p>
                    <p className="readex-300 text-sm text-stone-600">More about me on <a href="https://www.linkedin.com/in/mallanagoudapatil/" target="_blank" className="text-blue-600 cursor-pointer">LinkedIn</a></p>
                </div>
            </div>

            <div className="md:hidden visible flex flex-col  gap-4 ring-1 ring-stone-200 shadow-sm mx-4  max-w-[700px] px-4 py-4 bg-stone-100 bg-opacity-30 rounded-lg backdrop-blur-sm">
                <div className="flex gap-2">
                    <img className="md:max-h-44 max-h-24 object-cover max-w-44 rounded-md" src={Mallan} alt="" />
                    <div className="flex flex-col gap-2 justify-between">
                        <div className="flex flex-col gap-1">
                        <h1 className=" readex-500 text-xl text-stone-700">Mallanagouda Patil</h1>
                        <p className="readex-300 text-sm text-stone-700">BE(cs) Ms(cs) Software Architect
                            20+ years of Software development experience in top product
                         based MNCs</p>
                     </div>
                    </div>
                    </div>
                <div>
                    <p className="readex-400 text-md text-stone-700 mt-2">"Believing in the importance of fundamentals, let's
                            master the building blocks of coding together."</p>
                    <p className="readex-300 text-sm text-stone-600">More about me on <snap className="text-blue-600 cursor-pointer">LinkedIn</snap></p>
                </div>
            </div>

        
           
        </div>
    )
}