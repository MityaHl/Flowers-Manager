export const checkAccess = () => ({
  type: 'GET_ACCESS',
})

export const onCheckAccess = () => ({
  type: 'ON_GET_ACCESS',
  payload: true,
})
