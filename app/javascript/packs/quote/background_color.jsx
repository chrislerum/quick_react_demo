import React from 'react'

class BackgroundColor extends React.Component {
  render() {
    return(
      <div className="control">
        Background Color
        <br />
        <select onChange={this.props.changeHandler}>
          <option value='white'>White</option>
          <option value='pink'>Pink</option>
          <option value='green'>Green</option>
        </select>
      </div>
    )
  }
}

export default BackgroundColor
