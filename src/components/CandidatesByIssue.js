import { Component } from 'react'
import urls from '../data/urls'

export default class CandidatesByIssue extends Component {
  renderCandidates() {
    let { candidates, issue } = this.props
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
          <div className="description">
            { candidate[issue] }
          </div>
        </div>
      )
    })
  }

  render() {
    let { issue } = this.props
    let url = urls[issue]
    return(
      <div>
        <div className="candidates-by-issue" >
          { this.renderCandidates() }
        </div>
        <a className="more" target="_blank" href={ url }>
          Read more about each candidates’ take on { issue }
        </a>
      </div>
    )
  }
}
