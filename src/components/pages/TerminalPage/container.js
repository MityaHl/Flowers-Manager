import { connect } from 'react-redux'

import { checkAccess } from '@/store/actions/access'

import TerminalPage from './component'

const mapStateToProps = state => ({
  access: state.access,
})

const mapDispatchToProps = dispatch => ({
  checkAccess: () => dispatch(checkAccess()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TerminalPage)
