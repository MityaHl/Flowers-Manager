import React from 'react'
import { css } from 'aphrodite'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import OneSelectedProduct from './components/OneSelectedProduct'
import TotalPrice from './components/TotalPrice'

import styles from './styles'

const SelectedProducts = () => {
  return (
    <div className={css(styles.selectedProducts)}>
      <div className={css(styles.list)}>
        <div>
          <Grid
            container
          >
            <Grid
              item
              xs={5}
              className={css(styles.listItemInfo)}
            >
              Наименование
            </Grid>
            <Grid
              item
              xs={3}
              className={css(styles.listItemInfo)}
            >
              Количество
            </Grid>
            <Grid
              item
              xs={2}
              className={css(styles.listItemInfo)}
            >
              Цена
            </Grid>
            <Grid
              item
              xs={2}
              className={css(styles.listItemInfo)}
            >
              Итого
            </Grid>
          </Grid>
        </div>
        <OneSelectedProduct />
      </div>
      <TotalPrice />
    </div>
  )
}

export default SelectedProducts
