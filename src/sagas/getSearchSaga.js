import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
import Cookies from 'universal-cookie'

import { onGetSearch } from '@/store/actions/search'

const cookies = new Cookies()

function onGetSearchData () {
  return axios
    .get('https://flowers-manager-api.herokuapp.com/api/terminal/getSearches', {
      headers: { AuthTerm: cookies.get('AuthTerm') },
    })
    .then(
      response => {
        return response.data
      }
    )
}

function * putData () {
  try {
    const search = yield call(onGetSearchData)
    yield put(onGetSearch(search))
  } catch (error) {
    console.log(error)
  }
}

export function * watchSearch () {
  yield takeEvery('GET_SEARCH', putData)
}
