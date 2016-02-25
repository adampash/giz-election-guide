import { Component } from 'react'

export default class Issue extends Component {
  constructor() {
    super()
    this.state = { hover: false }
  }
  handleClick(e) {
    console.log("hi")
  }

  render() {
    const { issue, selected, onClick } = this.props
    let { hover } = this.state
    return(
      <div
        onClick={ (e) => onClick(issue) }
        onMouseOver={() => this.setState({hover: true})}
        onMouseOut={() => this.setState({hover: false})}
        className={ "issue" + (hover && !selected ? " hover" : "")}
      >
        <div className={
            "identifier" + (selected ? " selected" : "")
        } />
        <span className="text">
          { issue }
        </span>
      </div>
    )
  }
}
