import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as questionActionCreators from '../../actions/questions'

import QuestionContainer from './QuestionContainer'

function mapStateToProps(state, routing) {
  return {
    ...state.questions,
    ...routing,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...questionActionCreators,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionContainer)
