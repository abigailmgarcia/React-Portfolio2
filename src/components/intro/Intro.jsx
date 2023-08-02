import React from 'react'
import "./intro.scss"
import {AiOutlineArrowDown} from "react-icons/ai"
import PortfolioImage from '../../assets/IMG_6226.jpg';


export default function intro() {

  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
         <img src= {PortfolioImage} alt="" />
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
