import React from 'react'
import { css } from 'aphrodite'
import Grid from '@material-ui/core/Grid'
import { Resizable, ResizableBox } from 'react-resizable'
import SplitPane, { Pane } from 'react-split-pane'

import OrderList from './OrderList'
import OrderListSearch from './OrderListSearch'

import styles from './styles'

const OrderListPage = ({ sorts }) => {
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
        <OrderListSearch sorts={sorts} />
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
