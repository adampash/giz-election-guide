import { Component } from 'react'
import { connect, dispatch } from 'react-redux'
import SectionHead from '../components/SectionHead'
import Candidate from '../components/Candidate'
import Issue from '../components/Issue'
import { candidates, issues } from '../data/data'


class AppContainer extends Component {
  constructor() {
    super()
    this.state = {
      selected: "",
      selectedType: "",
    }
  }
  handleIssueClick(issue) {
    this.setState({selected: issue, selectedType: "issue"})
  }

  renderCandidates() {
    return candidates.map((candidate, index) => {
      return (<Candidate candidate={ candidate } key={ index } />)
    })
  }

  renderIssues() {
    let { selected } = this.state
    return issues.map((issue, index) => {
      return (
        <Issue issue={ issue }
          key={ index }
          selected={ selected === issue}
          onClick={ this.handleIssueClick.bind(this) }
        />
      )
    })
  }

  render() {
    const { dispatch, foo } = this.props
    return(
      <div>
        <h4 className="header">Gizmodo Interactive</h4>
        <h2 className="title">Gizmodo 2016 Election Guide</h2>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <SectionHead title="The Candidates" />
        <div className="candidates">
          { this.renderCandidates() }
        </div>
        <SectionHead title="The Issues" />
        <div className="issues">
          { this.renderIssues() }
        </div>
      </div>
    )
  }
}

function select(state) {
  return {foo: state.foo}
}

export default connect(select)(AppContainer)
