import './WorkCard.css';
import React from 'react'
import project1 from '../assets/project1.png';
import { NavLink } from 'react-router-dom';
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData'

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
           {
            WorkCardData.map((val, index) =>{
                return(
                    <WorkCard 
                    key={index}
                    imgSrc={val.imgSrc}
                    title={val.title}
                    description={val.description} 
                    view={val.view} />

                );
            })
           }
        </div>
    </div>
  )
}

export default Work