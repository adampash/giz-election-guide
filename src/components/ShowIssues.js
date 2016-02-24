import { Component } from 'react'

export default class ShowIssues extends Component {
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
            <div className="issue-description">
              { candidate[issue] }
            </div>
          </div>
        )}
      </div>
    )
  }
}
