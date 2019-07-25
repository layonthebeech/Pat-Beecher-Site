import React from "react"
import { scrollTo } from "../../dist/helpers.js"

class NavItem extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }
  componentDidMount() {
    scrollTo()
  }
  render() {
    return (
      <a ref={this.myRef} className="nav__item" href={`#${this.props.id}`}>
        {this.props.title}
      </a>
    )
  }
}

export default NavItem
