import React from 'react'
import './Side.css'
import Favlist from '../comp/cat/Favlist'

export default function Side({fav}) {
  return (
    <div>
      <section className="sidebar">

        <div className="logo-container">
          <h1><i class="fa-solid fa-heart"></i></h1>
          <h2>wishes</h2>
        </div>
          <Favlist fav={fav} />
          {fav.length > 0 ? (
          <Favlist fav={fav} />
        ) : (
          <div className="logo-container">
          <h1><i class="fa-solid fa-heart"></i></h1>
          <h2>wishes</h2>
        </div>
        )}
      </section>
      <section>
      </section>
    </div>
  )
}
