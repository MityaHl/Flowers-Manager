import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
import Cookies from 'universal-cookie'

import { putLoginTerminalData } from '@/store/actions/loginTerminal'
import { checkAccess } from '@/store/actions/access'

const cookies = new Cookies()

function onLoginTerminal (data) {
  return axios
    .post('https://flowers-manager-api.herokuapp.com/api/terminal/auth/login', {
      floristPassword: 'test',
      terminalLogin: 'test',
      terminalPassword: 'test',
    })
    .then(
      response => {
        cookies.set('AuthTerm', `Bearer ${response.data.token}`)
        return response.data
      }
    )
}

function * putData (action) {
  try {
    yield call(onLoginTerminal, action.payload)
    yield put(checkAccess())
  } catch (error) {
    console.log(error)
  }
}

export function * watchLoginTerminal () {
  yield takeEvery('LOGIN_TERMINAL', putData)
}
