import { all } from 'redux-saga/effects'

import { watchLoginShop } from './loginShopSaga'
import { watchLoginTerminal } from './loginTerminalSaga'

export default function * rootSaga () {
  yield all([
    watchLoginShop(),
    watchLoginTerminal(),
  ])
}