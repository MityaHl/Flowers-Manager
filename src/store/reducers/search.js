export default function search (state = false, action) {
  switch (action.type) {
    case 'ON_GET_SEARCH': return action.payload

    default: return state
  }
}
