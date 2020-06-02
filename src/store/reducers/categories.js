export default function categories (state = false, action) {
  switch (action.type) {
    case 'ON_GET_CATEGORIES': return action.payload

    default: return state
  }
}
