import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { onGetOrders } from '@/store/actions/orders'

function onGetOrdersData () {
  return axios
    .get('https://flowers-manager-api.herokuapp.com/api/terminal/getOrders')
    .then(
      response => {
        return response.data
      }
    )
}

function * putData () {
  try {
    const orders = yield call(onGetOrdersData)
    yield put(onGetOrders(orders))
  } catch (error) {
    console.log(error)
  }
}

export function * watchOrders () {
  yield takeEvery('GET_ORDERS', putData)
}
