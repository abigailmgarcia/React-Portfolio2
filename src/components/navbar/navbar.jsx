import React from 'react'
import "./navbar.scss"
import { BsGithub } from "react-icons/bs"
import { IoMdMail } from "react-icons/io";
import {BsTwitter} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'navbar ' + (menuOpen && "active")}>
      <div className='wrapper'>
          <div className="left">
            <a href="#intro" className='logo'>Portfolio</a>
            <div className="itemcontainer">
              <a href="https://github.com/abigailmgarcia" className='icon'>
              <BsGithub className='icon'/>
              </a>  
            </div>
            <div className="itemcontainer">
            <a href="mailto:abigailmg31@gmail.com" className='icon'>
              < IoMdMail className='icon' />
              </a>
              <span></span>
            </div>
            <div className="itemcontainer">
              <a href="https://twitter.com/_abigailgarcia" className='icon'>
              < BsTwitter className='icon'/>
              </a>  
            </div>
            <div className="itemcontainer">
              <a href="https://www.linkedin.com/in/abigail-garcia-174640286/" className='icon'>
              < BsLinkedin className='icon'/>
              </a>  
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
          </div>
      </div>
    </div>
  )
}
