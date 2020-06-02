import { combineReducers } from 'redux'
import loginTerminal from './loginTerminal'
import loginShop from './loginShop'
import orders from './orders'
import sorts from './sorts'
import search from './search'
import categories from './categories'
import products from './products'
import access from './access'
import florist from './florist'

export default combineReducers({
  loginTerminal,
  loginShop,
  categories,
  orders,
  sorts,
  search,
  access,
  products,
  florist,
})
