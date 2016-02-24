import { Component } from 'react'

export default class Candidate extends Component {
  handleClick(e) {
    console.log("hi")
  }

  render() {
    const { onClick, candidate } = this.props
    const { name, image, party } = candidate
    const [first, last] = name.split(/\s/)
    return(
      <div
        onClick={ (e) => onClick(name) }
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
