import React from 'react'
import ReactDOM from 'react-dom'
import Quote from './quote'
import Font from './font'
import Color from './color'
import BackgroundColor from './background_color'

class Whole extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'black',
      background_color: 'white',
      font: 'Roboto'
    }
  }

  colorChangeHandler = (e) => {
    this.setState({
      color: e.target.value
    })
  }

  backgroundColorChangeHandler = (e) => {
    this.setState({
      background_color: e.target.value
    })
  }

  fontChangeHandler = (e) => {
    this.setState({
      font: e.target.value
    })
  }

  render() {
    return(
      <div className="container">
        Each box is a React component. State contains color, bgcolor and font.
        <div className="row">
          <Quote color={this.state.color} background_color={this.state.background_color} font={this.state.font} />
        </div>
        <div className="row controls">
          <Font changeHandler={this.fontChangeHandler} />
          <Color changeHandler={this.colorChangeHandler} className="control" />
          <BackgroundColor changeHandler={this.backgroundColorChangeHandler} className="control" />
        </div>
      </div>
      )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Whole />,
    document.body.appendChild(document.createElement('div')),
  )
})
