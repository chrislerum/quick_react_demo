import React from 'react'

class Font extends React.Component {

  render() {
    return(
      <div className="control">
        Font
        <br />
        <select onChange={this.props.changeHandler}>
          <option value='Roboto'>Roboto</option>
          <option value='Roboto Condensed'>Roboto Condensed</option>
          <option value='Eater'>Eater</option>
        </select>
      </div>
    )
  }
}

export default Font
