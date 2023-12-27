import React from 'react'
import './Hero.css'
import heroimg from '../Assets/images/hero-1-img.jpeg'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <div><h1>NEW ARRIVALS ONLY</h1></div>
            <p>Sourced from the world’s best brands and boutiques, find pieces that spark joy, featuring Ferragamo, Rolex, Acne Studios and more</p>
            <button> Shop now</button>
        </div>
        <div className="hero-right">
            <img src= {heroimg} alt="hero-img" />
        </div>
    </div>
  )
}

export default Hero