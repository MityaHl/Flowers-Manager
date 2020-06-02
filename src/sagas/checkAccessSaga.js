import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
import Cookies from 'universal-cookie'

import { onCheckAccess } from '@/store/actions/access'
import { getFloristData } from '@/store/actions/florist'

const cookies = new Cookies()

function checkAccess () {
  return axios
    .get('https://flowers-manager-api.herokuapp.com/api/terminal/auth/checkAccess', {
      headers: { AuthTerm: cookies.get('AuthTerm') },
    })
    .then(
      response => {
        axios.defaults.headers['AuthTerm'] = cookies.get('AuthTerm')
        return response.data
      }
    )
}

function * putData () {
  try {
    yield call(checkAccess)
    yield put(onCheckAccess())
    yield put(getFloristData())
  } catch (error) {
    console.log(error)
  }
}

export function * watchAccess () {
  yield takeEvery('GET_ACCESS', putData)
}
