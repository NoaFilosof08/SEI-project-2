import React from 'react' 
import axios from 'axios'

import { Link } from 'react-router-dom'
import Loader from './Loader'

class GamePage extends React.Component {
  state = {
    quotes: '',
    character: '',
    options: [],
    amendedOption: null,
    loading: false
  }

  async componentDidMount() {
    try {
      const resQuote = await axios.get('https://cors-anywhere.herokuapp.com/https://officeapi.dev/api/quotes/random')
      const resChar = await axios.get('https://cors-anywhere.herokuapp.com/https://officeapi.dev/api/characters/')
      this.setState({ options: resChar.data.data })
      console.log(resChar.data.data)
      this.setState({ quotes: resQuote.data.data.content, character: resQuote.data.data.character.firstname })
      this.getRandom()
      this.setState({ loading: true })
    } catch (err) {
      console.log(err)
    }
  }

  getRandom = () => {
    let currentChoices = []
    for (let i = 0; i < 3; i++) {
      const random = this.state.options[Math.floor(Math.random() * this.state.options.length)]
      if (random.firstname === this.state.character) {
        return this.getRandom()
      } else {
        currentChoices.push(random.firstname)
      }
    }  
    this.setState({ amendedOption: [...currentChoices] })
  }

  tryAgain = () => {
    window.location.reload(false)
  }

  return = () => {
    this.props.history.push('/')
  }

  render() {
    if (!this.state.amendedOption) return <Loader />
    return (
      <>
        <div className="section columns is-vcentered background">
          <div className="container column">
            <div className="logo">
              <img src="https://i.pinimg.com/originals/53/90/7f/53907f287c469f9db37731697f21712c.png" className="logoimg"></img>
            </div>    
            <div className="thebox">
              <div className="media">
                <div className="media-content">
                  <div className="content">
                    <div>
                      <strong>Guess the quote</strong> <small>@theusoffice</small> <small>1m</small>
                      <p>{this.state.quotes}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns buttons-margin">
                <div className="buttons are-small column">{this.state.amendedOption.map(name => {
                  return <Link key={name} to="/game/loose" value={name} className="button is-info is-rounded">{name}</Link>
                })}
                <Link to="/game/win" value="win" className="button is-info is-rounded">{this.state.character}</Link>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column kevindiv">
                <img src="https://media.giphy.com/media/hKyroc5P7axuU/giphy.gif" alt="kevingif" className="kevingif"></img>
              </div>
            </div>
          </div>
          
          
        </div>
      </>
    )
  }
}

export default GamePage


  