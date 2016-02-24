import { Component } from 'react'

export default class ShowIssues extends Component {
  getIssues() {
  }

  render() {
    let { candidate, issues } = this.props
    let { name } = candidate
    let lastName = name.split(/\s/)[1]
    return(
      <div
        className="issues-for-candidates"
        >
        { issues.map((issue, index) =>
          <div key={ index }>
            <h4 className="issue-name">{ issue }</h4>
            { candidate[issue] }
          </div>
        )}
      </div>
    )
  }
}
        // <a className="more" target="_blank">
        //   More of { lastName }’s views
        // </a>
