import React from 'react'
import './works.scss'

export default function Works() {
  return (
    <div className='works' id="works">
      <h1>Portfolio</h1>
      <ul>
        <li className='active'>Short Stack</li>
        <li>Web</li>
        <li>Mobile App</li>
        <li>design</li>
      </ul>
      <div className="container">
        <div className='item'>
        <img src="./assets/shortstack.png" alt="" />
        <h3>ShortStack</h3>
      </div>
      <div className="item">
        <img src="./assets/shortstack.png" alt="" />
        <h3>ShortStack</h3>
      </div>
      <div className="item">
        <img src="./assets/shortstack.png" alt="" />
        <h3>ShortStack</h3>
      </div>
      <div className="item">
        <img src="./assets/shortstack.png" alt="" />
        <h3>ShortStack</h3>
      </div>
      <div className="item">
        <img src="./assets/shortstack.png" alt="" />
        <h3>ShortStack</h3>
      </div>
      </div>
    </div>
  )
}
