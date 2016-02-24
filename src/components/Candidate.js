import { Component } from 'react'

export default class Candidate extends Component {
  handleClick(e) {
    console.log("hi")
  }

  render() {
    console.log(this.props.candidate)
    const { name, image, party } = this.props.candidate
    const [first, last] = name.split(/\s/)
    return(
      <div
        onClick={this.handleClick}
        className="candidate"
        >
        <img src={ image } />
        <div className="name-and-party">
          { first } <br /> { last } <br /> [{ party }]
        </div>
      </div>
    )
  }
}
