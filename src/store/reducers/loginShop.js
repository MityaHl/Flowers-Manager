export default function loginShop (state = false, action) {
  switch (action.type) {
    case 'PUT_LOGIN_SHOP_DATA': return action.payload

    default: return state
  }
}
