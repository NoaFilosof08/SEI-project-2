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

  render() {
    if (!this.state.amendedOption) return null 
    return (
      <>
        <h5>Quote: </h5>
        <h4>' {this.state.quotes} '</h4>
        <h6>Options:  </h6>
        <div >
          {this.state.amendedOption.map(name => {
            return <button key={name} onClick={this.winning} value={name}>{name}</button>
          })}
          <button onClick={this.winning} value="win">{this.state.character}</button>
        </div>
        <p>{this.state.result}</p>
        <img src={this.state.winImage}></img>
        <img src={this.state.looseImage}></img>
        <button onClick={this.tryAgain}>Next one pls</button>
      </>
    )
  }
}

export default GamePage