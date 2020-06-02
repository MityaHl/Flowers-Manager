export default function orders (state = false, action) {
  switch (action.type) {
    case 'ON_GET_ORDERS': return action.payload

    default: return state
  }
}
