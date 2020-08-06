import React from 'react' 
import axios from 'axios'

class GamePage extends React.Component {
  state = {
    quotes: '',
    character: '',
    options: []
  }

  async componentDidMount() {
    try {
      // const resQuote = await axios.get('https://cors-anywhere.herokuapp.com/https://officeapi.dev/api/quotes/random')
      const resChar = await axios.get('https://cors-anywhere.herokuapp.com/https://officeapi.dev/api/characters/')
      this.setState({ options: resChar.data.data })
      console.log(resChar.data.data)
      // this.setState({ quotes: resQuote.data.data.content, character: resQuote.data.data.character.firstname })
      // console.log(resQuote.data)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <>
        <h5>Quote: </h5>
        <h4>' {this.state.quotes} '</h4>
        {/* <h4> {this.state.character}</h4> */}
        <div>{this.state.options.map(option => (
          <p key={option._id}>{option.firstname}</p>
        ))}
        </div>
      </>
    )
  }
}

export default GamePage