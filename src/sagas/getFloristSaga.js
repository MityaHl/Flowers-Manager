import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { onGetFloristData } from '@/store/actions/florist'

function onGetFlorist () {
  return axios
    .get('https://flowers-manager-api.herokuapp.com/api/terminal/getFloristData')
    .then(
      response => {
        return response.data
      }
    )
}

function * putData () {
  try {
    const categories = yield call(onGetFlorist)
    yield put(onGetFloristData(categories))
  } catch (error) {
    console.log(error)
  }
}

export function * watchFlorist () {
  yield takeEvery('GET_FLORIST', putData)
}
