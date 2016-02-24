import { Component } from 'react'

export default class Candidate extends Component {
  render() {
    const { onClick, candidate, selected } = this.props
    const { name, image, imagehov, party } = candidate
    const [first, last] = name.split(/\s/)
    let otherClass = ""
    if (selected) {
      if (party === "R") {
        otherClass = " rep"
      } else {
        otherClass = " dem"
      }
    }

    return(
      <div
        onClick={ (e) => onClick(name) }
        className="candidate"
        >
        <img src={ selected ? imagehov : image } />
        <div className={
            "name-and-party" + otherClass
        }>
          { first } <br /> { last } <br /> [{ party }]
        </div>
      </div>
    )
  }
}
