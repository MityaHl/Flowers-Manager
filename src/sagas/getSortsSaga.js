import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
import Cookies from 'universal-cookie'

import { onGetSorts } from '@/store/actions/sorts'

const cookies = new Cookies()

function onGetSortsData () {
  return axios
    .get('https://flowers-manager-api.herokuapp.com/api/terminal/getSorts', {
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
    const sorts = yield call(onGetSortsData)
    yield put(onGetSorts(sorts))
  } catch (error) {
    console.log(error)
  }
}

export function * watchSorts () {
  yield takeEvery('GET_SORTS', putData)
}
