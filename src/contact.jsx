import React from "react";

export default function Contact(){

    const WhatsApp = () => {
        window.open("https://api.whatsapp.com/send/?phone=917892255310&text&type=phone_number&app_absent=0", "_blank");
      };

    return(
        <div id="contact">
             <h1 className="h1Normal text-center px-4 md:text-6xl text-4xl">
                <br/><snap className="h1Grad2">Contact</snap> Us</h1>
                <div className="flex gap-6 flex-col items-center justify-center py-12">
                <button onClick={WhatsApp} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Connect Us on WhatsApp
                    </span>
                </button>
                    <p className="text-center readex-400 text-stone-700">Email us at <span className="text-sky-500 ">admin@heartcoders.com</span></p>
                    <p className="text-center readex-400 text-stone-700">Address : Banashankari Layout, Vidyanagar, Hubli, Karnataka, India</p>
                </div>

        </div>
    )
}