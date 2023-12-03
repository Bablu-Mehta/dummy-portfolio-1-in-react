import React from 'react';
import introImg from '../assets/intro-bg.jpg';
import {Link} from 'react-router-dom';
import './HeroImg.css';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={introImg} alt='introImg' />
        </div>
        <div className='content'>
            <p>Hi, I am Freelancer.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/project' className='btn btn-light'>Contact</Link>
           </div>
        </div>
    </div>
  )
}

export default HeroImg