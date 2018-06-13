import React from 'react'

class Color extends React.Component {

  render() {
    return(
      <div className="control">
        Text Color
        <br />
        <select onChange={this.props.changeHandler}>
          <option value='black'>Black</option>
          <option value='blue'>Blue</option>
          <option value='red'>Red</option>
        </select>
      </div>
    )
  }
}

export default Color
