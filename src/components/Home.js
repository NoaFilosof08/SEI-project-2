import React from 'react'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="container-div"> 
        <img src="https://media.giphy.com/media/da75JuW2HHuBNqOHHE/giphy.gif" alt="michael" className="michael-gif"></img>
        <div className="home-text">
          <h1>Dwitanic</h1>
          <h2>Welcome to your interview at Dunder Mifflin</h2>
          <ul>
            <li>A quote will appear on the page from one of our family members</li>
            <li>You have to guess who said which quote to be considered</li>
            <li>Click on the poster to begin your journey with us...</li>
          </ul>
        </div>
        
        <div className="dwight-button">
          <Link to="/game">
            <img className="dwight-image"src="https://i.redd.it/wd3eu7mlv9i01.jpg" alt="dwight"></img>
          </Link>
        </div>
        <p>NOW GO OUT THERE AND SELL SOME PAPER</p>
      </div>
      
    </>
  )
}

export default Home