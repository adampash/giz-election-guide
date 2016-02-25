import { Component } from 'react'
import SectionHead from '../components/SectionHead'
import Candidate from '../components/Candidate'
import Issue from '../components/Issue'
import ShowIssues from '../components/ShowIssues'
import CandidatesByIssue from '../components/CandidatesByIssue'
import { candidates, issues } from '../data/data'
import { Motion, spring } from 'react-motion'
import KinjaResizer from '../components/KinjaResizer'
import MobileDetect from 'mobile-detect'


export default class Interactive extends Component {
  constructor() {
    super()
    this.state = {
      selected: false,
      candidateSelected: false,
      issueSelected: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.resizeFor(15)
  }

  resizeFor(ticks=20) {
    let { resize } = this.props
    setTimeout((() => {
      ticks--
      resize()
      if (ticks === 0) return
      this.resizeFor(ticks)
    }), 100)
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

  render() {
    let {
      candidateSelected,
      issueSelected,
      selected,
    } = this.state
    let md = new MobileDetect(window.navigator.userAgent)
    let isMobile = md.mobile() !== null
    let candidateHeight, issueHeight
    console.log(isMobile)
    if (isMobile) {
      candidateHeight = 183
      issueHeight = 180
    } else {
      candidateHeight = 237
      issueHeight = 217
    }

    return (
      <KinjaResizer>
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
            <Motion defaultStyle={{
                marginLeft: 0,
                height: candidateHeight
              }}
              style={{
                marginLeft: (!issueSelected ? spring(0) : spring(-800)),
                height: (!issueSelected ? spring(candidateHeight) : spring(0))
              }}
              >
              {interpolation =>
                <div
                  className="low-z"
                  style={ interpolation }
                >
                  <SectionHead title="The Candidates" />
                  <div className="candidates">
                    { this.renderCandidates() }
                  </div>
                </div>
              }
            </Motion>

            <Motion defaultStyle={{
                marginLeft: 0,
                marginTop: 0,
                height: issueHeight
              }}
              style={{
                marginLeft: (!candidateSelected ? spring(0) : spring(-800)),
                height: (candidateSelected ? spring(0) : spring(issueHeight)),
                marginTop: (issueSelected ? spring(-6) : spring(0)),
              }}
              >
              {interpolation =>
                <div
                  style={ interpolation }
                  className="high-z"
                >
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
            { selected && !issueSelected &&
              <div
                className="back"
                onClick={ this.clearSelected.bind(this) }
                >
                Back to menu
              </div>
            }
          </div>
        </div>
      </KinjaResizer>
    )
  }
}
