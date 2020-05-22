import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as pageActionCreators from '../../actions/pages'

import PageContainer from './PageContainer'

function mapStateToProps(state, routing) {
  return {
    ...state.pages,
    ...routing,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...pageActionCreators,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageContainer)
