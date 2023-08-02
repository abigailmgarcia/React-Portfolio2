import React from 'react'
import './portfolio.scss'
import {AiOutlineArrowDown} from "react-icons/ai"

export default function portfolio() {
  return (
    <div className='portfolio' id="portfolio">
      <h3>Learn More About Me:</h3>
      <p> Hello, potential employer! I'm Abigail Garcia, a passionate and dedicated Full Stack Developer. I recently graduated from the UT Austin Coding Bootcamp. My mission now is to create innovative Web Applications and to be apart of a wonderful team of tech developers who never strive to stop learning. I thrive in dynamic environments, where I can collaborate with diverse teams to overcome challenges and achieve common goals. My communication skills and adaptability allow me to work seamlessly with cross-functional teams and stakeholders. What drives me most is the opportunity to make a positive impact. I take pride in delivering results that not only meet but also exceed expectations, providing value to clients, colleagues, users, and the community at large. Beyond my technical capabilities, I bring a positive attitude, a sense of humor, and a commitment to maintaining a collaborative and inclusive work environment. I'm excited to join a team that shares these values.</p>
      <h3> Skills:</h3>
      <p> I have a strong background in multiple coding languages such as: HTML, CSS, SCSS, JavaScript, JSX, React, multiple framework libraries and more! As a lifelong learner, I am always seeking new knowledge and staying up-to-date with the latest industry trends and technologies. I am eager to apply my insights and skills to contribute to the success of your organization.</p>

      <h4>if you are interested in connecting, my github and linked in profiles are above! Below you can checkout some of my work!</h4>
 
     <a href="#works">
      <AiOutlineArrowDown />
      </a> 
     </div>  
  )
}
