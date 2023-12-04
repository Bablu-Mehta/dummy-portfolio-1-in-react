import './PricingCard.css';

import React from 'react';
import {Link} from 'react-router-dom';

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>Basic</h3>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p>somthing</p>
                <p>somthing</p>
                <p>somthing</p>
                <p>something</p>
                <Link to='/contact' className='btn'>Purchase Now</Link>
            </div>
            <div className='card'>
                <h3>Basic</h3>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p>somthing</p>
                <p>somthing</p>
                <p>somthing</p>
                <p>something</p>
                <Link to='/contact' className='btn'>Purchase Now</Link>
            </div>
            <div className='card'>
                <h3>Basic</h3>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p>somthing</p>
                <p>somthing</p>
                <p>somthing</p>
                <p>something</p>
                <Link to='/contact' className='btn'>Purchase Now</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard