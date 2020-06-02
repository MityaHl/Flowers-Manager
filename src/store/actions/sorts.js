export const getSorts = () => ({
  type: 'GET_SORTS',
})

export const onGetSorts = data => ({
  type: 'ON_GET_SORTS',
  payload: data,
})
