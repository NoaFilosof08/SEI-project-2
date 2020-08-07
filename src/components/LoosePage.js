import React from 'react'
import { Link } from 'react-router-dom'

const LoosePage = () => {
  return (
    <>
      <div className="winbox">
        <h3>WAH WAH - not your day today</h3>
        <img src="https://media.giphy.com/media/1T96TRBBGYThC/giphy.gif" alt="win" className="img-shadow"></img>
        <div>
          <Link to="/game" className="button is-primary btn-margin">Next one pls</Link>
          <Link to="/" className="button is-danger btn-margin">Back to main page pls</Link>
        </div>
      </div>
    </>
  )
}

export default LoosePage
