export const getFloristData = () => ({
  type: 'GET_FLORIST',
})

export const onGetFloristData = data => ({
  type: 'ON_GET_FLORIST',
  payload: data,
})
