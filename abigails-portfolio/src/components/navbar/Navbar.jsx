import React from 'react'
import "./navbar.scss"
import { BsFillPersonFill } from "react-icons/bs"
import { IoMdMail } from "react-icons/io";

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
          <div className="left">
            <a href="#intro" className='logo'>hello</a>
            <div className="itemcontainer">
              <BsFillPersonFill className='icon'/>
              <span> +44 </span>
            </div>
            <div className="itemcontainer">
              < IoMdMail className='icon' />
              <span> abigail@gmail.com </span>
            </div>
          </div>
          <div className="right">
          </div>
      </div>
    </div>
  )
}
