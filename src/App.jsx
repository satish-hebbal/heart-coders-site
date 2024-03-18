import React from "react";
import NavBar from "./navbar";
import HomeComp from "./home";
import CourseComp from "./courses";
import Trainer from "./trainer";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import gsap from 'gsap'

import './App.css'

export default function App(){
  return(
    <div>
      <NavBar/>
      <HomeComp/>
      <CourseComp/>
      <Trainer/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}