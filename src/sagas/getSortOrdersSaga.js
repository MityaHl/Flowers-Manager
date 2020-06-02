import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
import Cookies from 'universal-cookie'

import { onGetOrders } from '@/store/actions/orders'

const cookies = new Cookies()

function onGetSortOrdersData (sort) {
  return axios
    .get(`https://flowers-manager-api.herokuapp.com/api/terminal/${sort}`, {
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
    const orders = yield call(onGetSortOrdersData, action.payload)
    yield put(onGetOrders(orders))
  } catch (error) {
    console.log(error)
  }
}

export function * watchSortOrders () {
  yield takeEvery('GET_SORT_ORDERS', putData)
}
