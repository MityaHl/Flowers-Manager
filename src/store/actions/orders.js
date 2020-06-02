export const getOrders = () => ({
  type: 'GET_ORDERS',
})

export const onGetOrders = data => ({
  type: 'ON_GET_ORDERS',
  payload: data,
})

export const getSortOrders = sort => ({
  type: 'GET_SORT_ORDERS',
  payload: sort,
})

export const getSearchOrders = data => ({
  type: 'GET_SEARCH_ORDERS',
  payload: data,
})
