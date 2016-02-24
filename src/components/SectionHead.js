import { Component } from 'react'

export default class SectionHead extends Component {
  render() {
    const { title } = this.props
    return(
      <div
        onClick={this.handleClick}
        className="sectionhead"
      >
        { title }
      </div>
    )
  }
}
