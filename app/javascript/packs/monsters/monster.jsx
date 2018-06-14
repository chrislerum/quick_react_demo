import React from 'react'

class Monster extends React.Component {
  render() {
    return(
      <div>
        <div className="monster-name">
          {this.props.monster.name}
          <div className="monster-description">
            {this.props.monster.description}
          </div>
        </div>
      </div>
      )
  }
}

export default Monster
