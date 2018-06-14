import React from 'react'
import ReactDOM from 'react-dom'
import Monsters from './monsters'

class Container extends React.Component {
  render() {
    return(
      <div>
        <h2>Monsters</h2>
        <Monsters />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Container />,
    document.body.appendChild(document.createElement('div')),
  )
})
