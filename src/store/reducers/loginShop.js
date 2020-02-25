export default function loginShop (state = false, action) {
  switch (action.type) {
    case 'LOGIN_SHOP': return action.payload

    default: return state
  }
}