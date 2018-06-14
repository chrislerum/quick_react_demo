import React from 'react'
import axios from 'axios'
import Monster from './monster'

class Monsters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      monsters: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3000/monsters.json')
      .then(response => {
        this.setState({monsters: response.data})
      })
      .catch(error => console.log(error))
  }
  render() {
    return(
      <div>
        {this.state.monsters.map((monster) => <Monster key={monster.id} monster={monster} />)}
      </div>
      )
  }
}

export default Monsters
