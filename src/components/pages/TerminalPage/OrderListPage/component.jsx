import React from 'react'
import { css } from 'aphrodite'
import Grid from '@material-ui/core/Grid'

import OrderList from './OrderList'
import OrderListSearch from './OrderListSearch'

import styles from './styles'

const OrderListPage = () => {
  return (
    <Grid
      container
      direction="row"
      className={css(styles.orderListPage)}
    >
      <Grid
        item
        xs={3}
      >
        <OrderListSearch />
      </Grid>
      <Grid
        item
        xs={9}
      >
        <OrderList />
      </Grid>
    </Grid>
  )
}

export default OrderListPage
