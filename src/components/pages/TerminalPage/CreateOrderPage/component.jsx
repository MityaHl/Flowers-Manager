import React from 'react'
import { css } from 'aphrodite'
import Button from '@material-ui/core/Button'

import styles from './styles'

const CreateOrderPage = () => {
  return (
    <div className={css(styles.createOrder)}>
      <Button variant="contained" color="primary" className={css(styles.firstChild)}>
        Информация о заказчике
      </Button>
      <Button variant="contained" color="primary" className={css(styles.secondChild)}>
        Информаци о заказе
      </Button>
    </div>
  )
}

export default CreateOrderPage
