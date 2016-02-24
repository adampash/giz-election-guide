import { Component } from 'react'

export default class Issue extends Component {
  handleClick(e) {
    console.log("hi")
  }

  render() {
    const { issue, selected, onClick } = this.props
    return(
      <div
        onClick={ (e) => onClick(issue) }
        className="issue"
        >
        <div className={ "identifier" + (selected ? " selected" : "") }></div>
        { issue }
      </div>
    )
  }
}
