export default function products (state = false, action) {
  switch (action.type) {
    case 'ON_GET_PRODUCTS': return action.payload
    case 'CLEAR_PRODUCTS': return action.payload

    default: return state
  }
}
