import React from "react"

class Circle extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }
  componentDidMount() {
    // const Plyr = this.props.plyr
    // const player = new Plyr(this.myRef.current, {
    //   autoPause: true,
    //   tooltips: {
    //     seek: false,
    //   },
    // })
  }
  render() {
    return <div></div>
  }
}

export default Circle
