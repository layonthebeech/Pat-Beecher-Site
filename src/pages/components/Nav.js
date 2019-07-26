import React from "react"
import NavItem from "./NavItem"

class Nav extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <nav className="nav">
        {this.props.sections &&
          this.props.sections.map(section => {
            return (
              <NavItem
                key={section.title}
                id={section.id}
                title={section.title}
              />
            )
          })}
      </nav>
    )
  }
}

export default Nav
