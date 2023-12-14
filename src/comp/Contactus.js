import React from 'react'
import Nav from './NavG'
import Hero from "./hero"
import FormC from "./db/FormContact"
import Footer from './Footer';


export default function Contactus() {
  return (
    <div>
      <Hero
        cName="hero-mid"
        heroImg="https://plus.unsplash.com/premium_photo-1682390303366-7463dcbec281?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title1="contact us"
      />
        <FormC />
        <Footer />

    </div>
  )
}
