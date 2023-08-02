import React from 'react'
import './works.scss'
import WorkList from '../workList/worklist';

export default function Works() {

    const list = [
     {
      id: "featured",
      title: "Featured",
     },
     {
      id: "web",
      title: "Web App",
     },
     {
      id: "mobile",
      title: "Mobile App",
     },
     {
      id: "content",
      title: "Content",
     }
    ];

  return (
    <div className='works' id="works">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          < WorkList title={item.title} />
        ))}
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
