import { Component } from 'react'

export default class Candidate extends Component {
  constructor() {
    super()
    this.state = { hover: false }
  }

  render() {
    const { onClick, candidate, selected } = this.props
    let { hover } = this.state
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

    return (
      <div
        onClick={ (e) => onClick(name) }
        className="candidate"
        onMouseOver={ () => this.setState({ hover: true })}
        onMouseOut={ () => this.setState({ hover: false })}
        >
        <img src={ selected ? imagehov : image }
          style={{ opacity: (hover && !selected ? 0.85 : 1)}}
        />
        <div className={
            "name-and-party" + otherClass
        }>
          { first } <br /> { last } <br /> [{ party }]
        </div>
      </div>
    )
  }
}
