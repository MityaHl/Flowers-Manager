import { connect } from 'react-redux'

import { loginTerminal } from '@/store/actions/loginTerminal'
import { loginShop } from '@/store/actions/loginShop'

import ShopLoginForm from './component'

const mapStateToProps = state => ({
  loginTerminalData: state.loginTerminal,
  loginShopData: state.loginShop,
})

const mapDispatchToProps = dispatch => ({
  loginTerminal: data => dispatch(loginTerminal(data)),
  loginShop: data => dispatch(loginShop(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopLoginForm)
