export default function sorts (state = false, action) {
  switch (action.type) {
    case 'ON_GET_SORTS': return action.payload

    default: return state
  }
}
