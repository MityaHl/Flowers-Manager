import { combineReducers } from 'redux'
import loginTerminal from './loginTerminal'
import loginShop from './loginShop'

export default combineReducers({
  loginTerminal,
  loginShop,
})
