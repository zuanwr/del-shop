import React from 'react'
import './Offerce.css'
import exlusive_image from '../Assets/exclusive_image.png'

const Offerse = () => {
  return (
    <div className='offerce'>
      <div className="offer-left">
        <h1>exlusive</h1>
        <h1>offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exlusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offerse
