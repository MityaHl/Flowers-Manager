export default function loginTerminal (state = false, action) {
  switch (action.type) {
    case 'PUT_LOGIN_TERMINAL_DATA': return action.payload
    case 'LOGOUT_TERMINAL': return action.payload

    default: return state
  }
}