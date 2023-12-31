import React, {useState, useEffect} from 'react'
import './works.scss'
import WorkList from '../workList/worklist';
import { AiOutlineArrowDown } from "react-icons/ai";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
} from "../data"
import workoutImage from '../../assets/workoutpage.png'

export default function Works() {

  const [selected, setSelected ] = useState("featured");
  const [data, setData] = useState([]);
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
     }
    ];

    useEffect(() => {
      switch (selected){
        case "featured":
          setData(featuredPortfolio);
          break;
        case "web":
          setData(webPortfolio);
          break;
        case "mobile":
          setData(mobilePortfolio);
          break;
          default:
            setData(featuredPortfolio);
            break;
      }
    }, [selected]);

  return (
    <div className='works' id="works">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          < WorkList title={item.title} active = {selected === item.id} setSelected={setSelected} id={item.id}/>
        ))}
      </ul>
      <div className='container'>
        {data.map((d) => (
          <div className='item'>
            <a href={d.link} target='_blank' rel='noopener noreferrer'>  
            <div className='item-image' >
              <img src={d.img} alt=""/>
            </div>
             <h3>{d.title}</h3>
             </a>
            </div>
        ))}
                <a href="#contact">
          <AiOutlineArrowDown />
          </a>
      </div>
    </div>
  );
}
