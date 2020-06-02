import React, { useEffect } from 'react'
import { css } from 'aphrodite'

import ListItem from './components/ListItem'

import styles from './styles'

const OrderList = ({ orders, getOrders, getSorts, getSearch }) => {
  useEffect(() => {
    getOrders()
    getSorts()
    getSearch()
  }, [])

  return (
    <div className={css(styles.orderList)}>
      <div className={css(styles.list)}>
        {
          orders && orders.map((order, index) => (
            <ListItem order={order} key={order.id} />
          ))
        }
      </div>
    </div>
  )
}

export default OrderList
