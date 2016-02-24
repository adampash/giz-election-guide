import { Component } from 'react'
import { connect } from 'react-redux'
import SectionHead from '../components/SectionHead'
import Candidate from '../components/Candidate'
import Issue from '../components/Issue'
import ShowIssues from '../components/ShowIssues'
import CandidatesByIssue from '../components/CandidatesByIssue'
import { candidates, issues } from '../data/data'
import {StaggeredMotion, Motion, spring} from 'react-motion'


class AppContainer extends Component {
  constructor() {
    super()
    this.state = {
      selected: false,
      candidateSelected: false,
      issueSelected: false,
    }
  }

  clearSelected() {
    this.setState({
      selected: false,
      candidateSelected: false,
      issueSelected: false
    })
  }

  getSelectedCandidate() {
    let { selected } = this.state
    return candidates.find(
      candidate => candidate.name === selected
    )
  }

  handleIssueClick(issue) {
    this.setState({
      selected: issue,
      candidateSelected: false,
      issueSelected: true
    })
  }

  handleCandidateClick(name) {
    this.setState({
      selected: name,
      candidateSelected: true,
      issueSelected: false
    })
  }

  renderCandidates() {
    return candidates.map((candidate, index) => {
      return (
        <Candidate
          candidate={ candidate }
          key={ index }
          onClick={ this.handleCandidateClick.bind(this) }
          selected={ candidate.name == this.state.selected }
          />
      )
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

  getCandidateStyle() {
    let { candidateSelected, selected } = this.state
    let candidateStyle
    if (candidateSelected || !selected) {
      candidateStyle = {
        position: 'relative'
      }
    } else {
      candidateStyle = {
        position: 'absolute',
        maxWidth: 636,
      }
    }
    return candidateStyle
  }

  getIssueStyle() {
    let { issueSelected, selected } = this.state
    let issueStyle
    if (issueSelected || !selected) {
      issueStyle = {
        position: 'relative',
      }
    } else {
      issueStyle = {
        position: 'relative',
        maxWidth: 636,
      }
    }
    return issueStyle
  }

  render() {
    let { candidateSelected, issueSelected, selected } = this.state
    let candidateStyle = this.getCandidateStyle()
    let issueStyle = this.getIssueStyle()

    return(
      <div>
        <h4 className="header">Gizmodo Interactive</h4>
        <h2 className="title">Gizmodo 2016 Election Guide</h2>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="backcontainer">
          { selected &&
            <div
              className="back"
              onClick={ this.clearSelected.bind(this) }
              >
              Back to menu
            </div>
          }
        </div>
        <div className="motion-container">
          <Motion defaultStyle={{left: 0}}
            style={{
              left: (!issueSelected ? spring(0) : spring(-800))
            }}
            >
            {interpolation =>
              <div style={ {...candidateStyle, ...interpolation} }>
                <SectionHead title="The Candidates" />
                <div className="candidates">
                  { this.renderCandidates() }
                </div>
              </div>
            }
          </Motion>

          <Motion defaultStyle={{marginLeft: 0, height: 265}}
            style={{
              marginLeft: (!candidateSelected ? spring(0) : spring(-800)),
              height: (candidateSelected ? spring(0) : spring(265))
            }}
            >
            {interpolation =>
              <div style={ {...issueStyle, ...interpolation} }>
                <SectionHead title="The Issues" />
                <div className="issues">
                  { this.renderIssues() }
                </div>
              </div>
            }
          </Motion>
          { candidateSelected &&
            <ShowIssues
              candidate={ this.getSelectedCandidate()}
              issues={ issues }
            />
          }
          { issueSelected &&
            <CandidatesByIssue
              candidates={ candidates }
              issue={ selected }
            />
          }
        </div>
        <div className="backcontainer">
          { selected &&
            <div
              className="back"
              onClick={ this.clearSelected.bind(this) }
              >
              Back to menu
            </div>
          }
        </div>
      </div>
    )
  }
}

function select(state) {
  return {foo: state.foo}
}

export default connect(select)(AppContainer)
