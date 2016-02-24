import { Component } from 'react'

export default class CandidatesByIssue extends Component {
  renderCandidates() {
    let { candidates, issue } = this.props
    console.log(issue)
    return candidates.map( (candidate, index) => {
      let { name, party, imagehov } = candidate
      let [first, last] = name.split(/\s/)
      return (
        <div className="candidate-item" key={ index }>
          <img src={ imagehov } />
          <div className="name">
            { first } <br /> { last } <br />
            <span className={ party === "D" ? "dem" : "rep" }>
              [{ party }]
            </span>
          </div>
          <div className="description">{ candidate[issue] }</div>
        </div>
      )
    })
    return []
  }

  render() {
    return(
      <div className="candidates-by-issue" >
        { this.renderCandidates() }
      </div>
    )
  }
}
        // <a className="more" target="_blank">
        //   More of { lastName }’s views
        // </a>
