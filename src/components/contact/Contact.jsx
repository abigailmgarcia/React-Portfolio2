import React, { useState }from 'react'
import "./contact.scss"
import { IoMdMail } from "react-icons/io";
export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className='contact' id="contact">
      <div className="right">
        <h2>Contact Me:</h2>
        <form onSubmit={handleSumbit}>
        <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thank you! To get to me sooner refer to the email Icon below! </span>}
        </form>
        <div className="itemcontainer">
            <a href="mailto:abigailmg31@gmail.com" className='icon'>
              < IoMdMail className='icon' />
              </a>
            </div>
      </div>
    </div>
  )
}
