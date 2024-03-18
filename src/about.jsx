import React from "react";
import HC3D from './assets/HC3d.png'
import codeboy from './assets/devboy.png'
import targ from './assets/targ.png'
import mallan from './assets/mall.jpg'
import pooj from './assets/poja.jpg'
import sanj from './assets/sanj.jpg'
import sati from './assets/sati.jpg' 


export default function About(){
    return(
        <>
        <div id="about">

        <div className="flex flex-col gap-24 justify-center items-center">
            <h1 className="h1Normal text-center px-4 md:text-6xl text-5xl">Get to Know Our
                <br/><snap className="h1Grad2">Story & Team</snap> </h1>
            <div className="flex flex-col gap-4">
                <div className="flex px-16 justify-evenly">
                    <div className="flex flex-col justify-center gap-4 md:max-w-[50%]">
                        <h2 className="readex-500 text-stone-700 text-3xl">About HeartCoders</h2>
                        <p className="readex-400 text-lg">HeartCoders bridges the gap in coding education, empowering students to excel.
                             With a passion for teaching and a track record of success, we support aspiring 
                             coders and contribute to social causes through Mahatayi Gurukul an NGO.</p>
                    </div>
                    <div className="hidden md:block">
                        <img src={HC3D} className="max-h-[250px]" alt="" />
                    </div>
                </div>
                <div className="flex px-16 justify-evenly">
                    <div className="hidden md:block">
                        <img src={codeboy} className="max-h-[250px]" alt="" />
                    </div>
                    <div className="flex flex-col justify-center gap-4 md:max-w-[50%]">
                        <h2 className="readex-500 text-stone-700 text-3xl">Our Vision</h2>
                        <p className="readex-400 text-lg">HeartCoders aspires to revolutionize coding education, 
                        fostering inclusivity and collaboration. We prepare diverse technologists with coding 
                        proficiency and problem-solving skills. 
                            Through innovative curriculum and mentorship, we empower graduates for success in the tech industry.</p>
                    </div>
                </div>
                <div className="flex px-16 justify-evenly">
                    <div className="flex flex-col justify-center gap-4 md:max-w-[50%]">
                        <h2 className="readex-500 text-stone-700 text-3xl">Our Approach</h2>
                        <p className="readex-400 text-lg">Our curriculum, led by industry experts, emphasizes interactive and collaborative learning.
                         Flexible online classes, target-based teaching, regular quizzes, feedback, and community support enhance student engagement.</p>
                    </div>
                    <div className="hidden md:block">
                        <img src={targ} className="max-h-[250px]" alt="" />
                    </div>
                </div>

            </div>
        </div>
        <h2 className="readex-500 text-stone-700 text-3xl  text-center py-12">Our Team</h2>
            <div className="grid md:grid-cols-2 gap-4 px-24 items-center justify-center place-items-center  pb-24">
                <div className="flex flex-col flex-1 gap-4 ring-1 ring-stone-200 shadow-sm h-full w-full  px-4 py-4 bg-stone-100 bg-opacity-30 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                        <img className="max-h-44 object-cover max-w-24 rounded-full" src={mallan} alt="" />
                        <div className="flex flex-col">
                            <h3 className="readex-500 text-xl text-stone-800">Mallanagouda Patil</h3>
                            <p className="hidden md:visible readex-300 text-sm text-stone-500">BE(cs) Ms(cs) - Software Architect
                                20+ years of Software development experience in top product based MNCs</p>
                        </div>
                    </div>
                    <div>
                    <p className="md:block visible readex-300 text-sm text-stone-500">BE(cs) Ms(cs) - Software Architect
                                20+ years of Software development experience in top product based MNCs</p><p className="readex-400 text-stone-600">"Believing in the importance of fundamentals, let's master the building blocks of coding together."</p></div>
                </div>
                <div className="flex flex-col flex-1 gap-4 ring-1 ring-stone-200 shadow-sm h-full w-full  px-4 py-4 bg-stone-100 bg-opacity-30 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                        <img className="max-h-44 object-cover max-w-24 rounded-full" src={pooj} alt="" />
                        <div className="flex flex-col">
                            <h3 className="readex-500 text-xl text-stone-800">Pooja Gani</h3>
                            <p className=" readex-300 text-sm text-stone-500">BE(cs) - Student at KLE Tech</p>
                        </div>
                    </div>
                    <div><p className="readex-400 text-stone-600">Eager coder skilled in C programming, committed to perpetual learning in software development. Approachable and confident,
                             and excel in tackling complex challenges and competitive programming.</p></div>
                </div>
                <div className="flex flex-col flex-1 gap-4 ring-1 ring-stone-200 shadow-sm h-full w-full  px-4 py-4 bg-stone-100 bg-opacity-30 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                        <img className="max-h-44 object-cover max-w-24 rounded-full" src={sanj} alt="" />
                        <div className="flex flex-col">
                            <h3 className="readex-500 text-xl text-stone-800">Sanjana Patil</h3>
                            <p className=" readex-300 text-sm text-stone-500">BE(cs) - Student at KLE Tech</p>
                        </div>
                    </div>
                    <div><p className="readex-400 text-stone-600">Enthusiastic problem-solver, proficient in C, actively pursuing ongoing learning initiatives
                             and professional advancement opportunities.</p></div>
                </div>
                <div className="flex flex-col flex-1 gap-4 ring-1 ring-stone-200 shadow-sm h-full w-full px-4 py-4 bg-stone-100 bg-opacity-30 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                        <img className="max-h-44 object-contain max-w-24 rounded-full" src={sati} alt="" />
                        <div className="flex flex-col">
                            <h3 className="readex-500 text-xl text-stone-800">Satish Hebbal</h3>
                            <p className=" readex-300 text-sm text-stone-500">BE(cs) - Student at KLS GIT</p>
                        </div>
                    </div>
                    <div><p className="readex-400 text-stone-600">UI/UX enthusiast and web developer, crafting engaging digital experiences with creativity and technical skill.</p></div>
                </div>
            </div>
        </div>
        </>
    )
}