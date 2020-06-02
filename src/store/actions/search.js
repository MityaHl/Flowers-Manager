export const getSearch = () => ({
  type: 'GET_SEARCH',
})

export const onGetSearch = data => ({
  type: 'ON_GET_SEARCH',
  payload: data,
})
