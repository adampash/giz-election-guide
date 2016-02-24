import { Component } from 'react'
import { connect } from 'react-redux'
import Interactive from '../components/Interactive'
import SectionHead from '../components/SectionHead'
import Candidate from '../components/Candidate'
import Issue from '../components/Issue'
import ShowIssues from '../components/ShowIssues'
import CandidatesByIssue from '../components/CandidatesByIssue'
import { candidates, issues } from '../data/data'
import {StaggeredMotion, Motion, spring} from 'react-motion'
import KinjaResizer from '../components/KinjaResizer'

class AppContainer extends Component {
  render() {
    return(
      <KinjaResizer>
        <Interactive />
      </KinjaResizer>
    )
  }
}

function select(state) {
  return {foo: state.foo}
}

export default connect(select)(AppContainer)
