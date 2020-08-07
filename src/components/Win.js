import React from 'react'
import { Link } from 'react-router-dom'

const WinPage = () => {
  return (
    <>
      <img src="https://media.giphy.com/media/mp1JYId8n0t3y/giphy.gif" alt="win"></img>
      <Link to="/game">Next one pls</Link>
      <Link to="/">Back to main page pls</Link>
    </>
  )
}

export default WinPage
