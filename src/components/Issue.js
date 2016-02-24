import { Component } from 'react'

export default class Issue extends Component {
  handleClick(e) {
    console.log("hi")
  }

  render() {
    const { issue, selected } = this.props
    return(
      <div
        onClick={this.handleClick}
        className="issue"
        >
        <div className={ "identifier" + (selected ? " selected" : "") }></div>
        { issue }
      </div>
    )
  }
}
