export default function florist (state = false, action) {
  switch (action.type) {
    case 'ON_GET_FLORIST': return action.payload

    default: return state
  }
}
