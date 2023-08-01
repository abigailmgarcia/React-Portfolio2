import React from 'react'
import "./dropdown.scss"

export default function Dropdown({ menuOpen, setMenuOpen }) {
  return (
    <div className={" dropdown " + (menuOpen && "active")}>
        <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#portfolio">About Me</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#works">Projects</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#footer">footer</a>
            </li>
        </ul>
    </div>
  )
}
