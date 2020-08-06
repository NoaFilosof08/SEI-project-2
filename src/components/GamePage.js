import React from 'react' 
import axios from 'axios'

class GamePage extends React.Component {
  state = {
    quotes: '',
    character: '',
    options: [],
    amendedOption: null 
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
    console.log(currentChoices)
    this.setState({ amendedOption: [...currentChoices] })
  }

  render() {
    if (!this.state.amendedOption) return null 
    console.log(this.state.amendedOption)
    return (
      <>
        <h5>Quote: </h5>
        <h4>' {this.state.quotes} '</h4>
        <h6>Options:  </h6>
        <div>
          {this.state.amendedOption.map(name => {
            return <button key={name} value={name}>{name}</button>
          })}
          <button>{this.state.character}</button>
        </div>
      </>
    )
  }
}

export default GamePage