import React from 'react'

const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button className='secondary-button'>Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className='brand-icons'>
            <img src="./Images/Amazon_icon.png" alt="Amazon Logo" />
            <img src="./Images/flipkart logo.png" alt="Flipkart Logo" />
          </div>
        </div>
      </div>
      <div className='hero-image'>
        <img src="./Images/Shoes.png" alt="Shoes Image" />
      </div>
    </main>
  )
}

export default HeroSection
