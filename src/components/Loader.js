import React from 'react'

const Loader = () => {
  return (
    <>
      <div className="loader-container">
        <div className="logo">
          <img src="https://i.pinimg.com/originals/53/90/7f/53907f287c469f9db37731697f21712c.png" className="logoimg" alt="logoimg"></img>
        </div>    
        <h1>Loading...</h1>
        <progress className="progress is-medium is-dark" max="100">45%</progress>
        <div>
          <img src="https://media.giphy.com/media/muGYyrWwxOOMo/giphy.gif" alt="logoimg"></img>
        </div>
      </div>
    </>
  )
}

export default Loader