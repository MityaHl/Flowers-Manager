import { connect } from 'react-redux'

import Header from './component'

const mapStateToProps = state => ({
  florist: state.florist,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
