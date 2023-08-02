import React from 'react'
import "./contact.scss"

export default function Contact() {

  const handleSumbit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="assets/message.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSumbit}>
          <input type="text" placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}
