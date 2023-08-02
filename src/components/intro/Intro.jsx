import React from 'react'
import "./intro.scss"
import {AiOutlineArrowDown} from "react-icons/ai"


export default function intro() {

  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="public/assets/IMG_6226.jpg" alt="" />
        </div>
      </div>
  
      <div className="right">
        <div className="wrapper">
          <h2>Hello Everyone, I am</h2>
          <h1>Abigail Garcia</h1>
          <h3><span> FullStack Web Dev</span></h3>
        </div>
        <a href="#portfolio">
          <AiOutlineArrowDown />
          </a>
      </div>
    </div>
  )
}
