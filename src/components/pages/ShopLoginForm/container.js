import { connect } from 'react-redux'

import { loginTerminal } from '@/store/actions/loginTerminal'
import { loginShop } from '@/store/actions/loginShop'

import ShopLoginForm from './component'

const mapStateToProps = state => ({
  isLoginTerminal: state.loginTerminal,
  isLoginShop: state.loginShop,
})

const mapDispatchToProps = dispatch => ({
  loginTerminal: () => dispatch(loginTerminal()),
  loginShop: () => dispatch(loginShop()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopLoginForm)
