import React from 'react'
import { Link } from 'react-router-dom'

const WinPage = () => {
  return (
    <>
      <div className="winbox">
        <h3>AMAZING - you guess right</h3>
        <img src="https://media.giphy.com/media/mp1JYId8n0t3y/giphy.gif" alt="win" className="img-shadow"></img>
        <div>
          <Link to="/game" className="button is-primary btn-margin">Next one pls</Link>
          <Link to="/" className="button is-danger btn-margin">Back to main page pls</Link>
        </div>
      </div>
    </>
  )
}

export default WinPage
