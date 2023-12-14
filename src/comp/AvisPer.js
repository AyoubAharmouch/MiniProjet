import React from 'react'
import Nav from './NavG'
import Hero from './hero'
import Feedback from './db/Feedback'


export default function AvisPer() {
  return (
    <div>
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title1="Feedback"
      />
      <Feedback />

    </div>
  )
}
