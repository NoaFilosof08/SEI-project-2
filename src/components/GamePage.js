import React from 'react' 
import axios from 'axios'

class GamePage extends React.Component {
  state = {
    quotes: '',
    character: '',
    options: [],
    amendedOption: null,
    winImage: '',
    looseImage: ''
  }

  async componentDidMount() {
    try {
      const resQuote = await axios.get('https://cors-anywhere.herokuapp.com/https://officeapi.dev/api/quotes/random')
      const resChar = await axios.get('https://cors-anywhere.herokuapp.com/https://officeapi.dev/api/characters/')
      this.setState({ options: resChar.data.data })
      console.log(resChar.data.data)
      this.setState({ quotes: resQuote.data.data.content, character: resQuote.data.data.character.firstname })
      this.getRandom()
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

  winning = (event) => {
    if (event.target.value === 'win') {
      return this.setState({ winImage: 'https://media.giphy.com/media/mp1JYId8n0t3y/giphy.gif' })
    } else {
      return this.setState({ looseImage: 'https://media.giphy.com/media/1T96TRBBGYThC/giphy.gif' })
    }
  }

  tryAgain = () => {
    window.location.reload(false)
  }

  return = () => {
    this.props.history.push('/')
  }

  render() {
    if (!this.state.amendedOption) return null 
    return (
      <>
        <div className="section columns">
          <div className="container column">
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
            <div className="columns">
              <div className="buttons are-small column">{this.state.amendedOption.map(name => {
                return <button key={name} onClick={this.winning} value={name} className="button is-info is-rounded">{name}</button>
              })}
              <button onClick={this.winning} value="win" className="button is-info is-rounded">{this.state.character}</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default GamePage


//   <p>{this.state.result}</p> 
//   <img src={this.state.winImage}></img>
//   <img src={this.state.looseImage}></img>
//   <button onClick={this.tryAgain}>Next one pls</button>
//   <button onClick={this.return}>back to main page</button>