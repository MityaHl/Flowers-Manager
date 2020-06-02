export const getProducts = id => ({
  type: 'GET_PRODUCTS',
  payload: id,
})

export const clearProducts = () => ({
  type: 'CLEAR_PRODUCTS',
  payload: false,
})

export const onGetProducts = data => ({
  type: 'ON_GET_PRODUCTS',
  payload: data,
})
