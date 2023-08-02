import React, { useState }from 'react'
import "./contact.scss"

export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    setMessage(true);
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
          {message && <span>Thank you, I will reply ASAP! </span>}
        </form>
      </div>
    </div>
  )
}
