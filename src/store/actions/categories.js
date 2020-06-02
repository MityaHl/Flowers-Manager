export const getCategories = () => ({
  type: 'GET_CATEGORIES',
})

export const onGetCategories = data => ({
  type: 'ON_GET_CATEGORIES',
  payload: data,
})
