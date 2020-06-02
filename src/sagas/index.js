import { all } from 'redux-saga/effects'

import { watchLoginShop } from './loginShopSaga'
import { watchLoginTerminal } from './loginTerminalSaga'
import { watchOrders } from './getOrdersSaga'
import { watchSortOrders } from './getSortOrdersSaga'
import { watchSorts } from './getSortsSaga'
import { watchSearch } from './getSearchSaga'
import { watchSearchOrders } from './getSearchOrdersSaga'
import { watchCategories } from './getCategoriesSaga'
import { watchProducts } from './getProductsSaga'
import { watchAccess } from './checkAccessSaga'
import { watchFlorist } from './getFloristSaga'

export default function * rootSaga () {
  yield all([
    watchSearchOrders(),
    watchSearch(),
    watchProducts(),
    watchLoginShop(),
    watchLoginTerminal(),
    watchOrders(),
    watchSortOrders(),
    watchSorts(),
    watchCategories(),
    watchFlorist(),
    watchAccess(),
  ])
}
