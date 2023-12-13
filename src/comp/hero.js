import React from 'react'
import '../css/hero.css'

export default function hero(props) {
  return (
    <div className={props.cName}>
        <img src={props.heroImg} alt="take an adventure" />
        <div className="divTxt">
            <h1>{props.title1}</h1>
            <h2>{props.title2}</h2>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>{props.btntxt}</a>
        </div>
    </div>
  )
}
