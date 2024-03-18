import React from "react";
import HC from './assets/HC.png'

export default function Footer(){
    return(
        <footer className="bg-stone-900">
            <div className="w-full px-12 py-4 flex items-center justify-between">
                <p className="readex-300 text-stone-300">Copyright © 2024 HeartCoders - All Rights Reserved.</p>
                <img className="h-10" src={HC} alt="" />
            </div>
        </footer>
    )
}