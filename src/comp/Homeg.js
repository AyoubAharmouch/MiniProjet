import React,{useState,useEffect}from 'react';
import '../css/home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from './hero'
import Nav from './NavG'
import Footer from './Footer';
import MostPopular from './MostPopular';


export default function Home() {
    
  return (
    <>
    <div className='iim mt-5 pt-5' style={{"paddingTop":"1555px"}}>
      <Nav />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1450500392544-c2cb0fd6e3b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title1="take a step"
        title2="we live just once"
        text="choose ur dream activity"
        url="./Categories"
        btnClass="show"
        btntxt="choose now"

      />

        <MostPopular />
    </div>
    <Footer />
    </>
    
  )
}
