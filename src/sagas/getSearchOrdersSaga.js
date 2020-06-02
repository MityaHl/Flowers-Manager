import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
import Cookies from 'universal-cookie'

import { onGetOrders } from '@/store/actions/orders'

const cookies = new Cookies()

function onGetSearchOrdersData (data) {
  const { url, param } = data
  console.log(param)
  return axios
    .get(`https://flowers-manager-api.herokuapp.com/api/terminal/${url}?value=${param}`, {
      headers: { AuthTerm: cookies.get('AuthTerm') },
    })
    .then(
      response => {
        return response.data
      }
    )
}

function * putData (action) {
  try {
    const orders = yield call(onGetSearchOrdersData, action.payload)
    yield put(onGetOrders(orders))
  } catch (error) {
    console.log(error)
  }
}

export function * watchSearchOrders () {
  yield takeEvery('GET_SEARCH_ORDERS', putData)
}
