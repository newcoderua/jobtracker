import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'
import JobApplicationTabPresentational from './job-application-tab-presentational'

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.testReducer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(() => alert('yo'))
    }
  }
}
const JobApplicationTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobApplicationTabPresentational)
export default JobApplicationTab