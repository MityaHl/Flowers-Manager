import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
import Cookies from 'universal-cookie'

import { onGetProducts } from '@/store/actions/products'

const cookies = new Cookies()

function onGetProductsData (id) {
  return axios
    .get(`https://flowers-manager-api.herokuapp.com/api/terminal/getProducts?value=${id}`, {
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
    const products = yield call(onGetProductsData, action.payload)
    yield put(onGetProducts(products))
  } catch (error) {
    console.log(error)
  }
}

export function * watchProducts () {
  yield takeEvery('GET_PRODUCTS', putData)
}
