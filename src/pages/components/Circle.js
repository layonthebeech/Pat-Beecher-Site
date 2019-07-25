import React from "react"

class Circle extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }
  componentDidMount() {
    const Plyr = require("plyr")
    new Plyr(this.myRef.current, {
      tooltips: {
        seek: false,
      },
    })
  }
  render() {
    return (
      <div className="audio">
        <h2>{this.props.title}</h2>
        <audio ref={this.myRef}>
          <source src={this.props.link} type="audio/mp3" />
        </audio>
      </div>
    )
  }
}

export default Circle
