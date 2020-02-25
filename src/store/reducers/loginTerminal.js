export default function loginTerminal (state = false, action) {
  switch (action.type) {
    case 'LOGIN_TERMINAL': return action.payload
    case 'LOGOUT_TERMINAL': return action.payload

    default: return state
  }
}