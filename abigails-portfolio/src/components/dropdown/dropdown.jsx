import React from 'react'
import "./dropdown.scss"

export default function Dropdown({ menuOpen, setMenuOpen }) {
  return (
    <div className={" dropdown " + (menuOpen && "active")}>
        <ul>
            <li>
                <a href="#intro">Home</a>
            </li>
            <li>
                <a href="#portfolio">About Me</a>
            </li>
            <li>
                <a href="#work">Projects</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            <li>
                <a href="#footer">footer</a>
            </li>
        </ul>
    </div>
  )
}
