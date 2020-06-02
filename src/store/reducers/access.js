export default function access (state = false, action) {
  switch (action.type) {
    case 'ON_GET_ACCESS': return action.payload

    default: return state
  }
}
