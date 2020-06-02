import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { onGetCategories } from '@/store/actions/categories'

function onGetCategoriesData () {
  return axios
    .get('https://flowers-manager-api.herokuapp.com/api/terminal/getCategories')
    .then(
      response => {
        return response.data
      }
    )
}

function * putData () {
  try {
    const categories = yield call(onGetCategoriesData)
    yield put(onGetCategories(categories))
  } catch (error) {
    console.log(error)
  }
}

export function * watchCategories () {
  yield takeEvery('GET_CATEGORIES', putData)
}
