import React from 'react'

var attribution_style = {
  fontWeight: 'bold'
}

class Quote extends React.Component {

  render() {
    return(
      <div className="quote" style={{color: this.props.color, fontFamily: this.props.font, backgroundColor: this.props.background_color}} >
        It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt. - <span style={attribution_style}>Mark Twain</span>
      </div>
    )
  }
}

export default Quote
