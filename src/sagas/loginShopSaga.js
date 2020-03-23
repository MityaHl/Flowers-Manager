import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { putLoginShopData } from '@/store/actions/loginShop'

function onLoginShop (data) {
  data = {
    login: data.terminalLogin,
    password: data.terminalPassword,
  }
  console.log(data)
  return axios
    .post('https://flowers-manager-api.herokuapp.com/api/terminal/auth/preLogin', data)
    .then(
      response => {
        return response.data
      }
    )
}

function * putData (action) {
  try {
    const shopData = yield call(onLoginShop, action.payload)
    yield put(putLoginShopData(shopData))
  } catch (error) {
    console.log(error)
  }
}

export function * watchLoginShop () {
  yield takeEvery('LOGIN_SHOP', putData)
}
