import React from 'react'
import { css } from 'aphrodite'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import styles from './styles'

const TotalPrice = () => {
  return (
    <div className={css(styles.selectedProductsControls)}>
      <Grid
        container
        direction="row"
      >
        <Grid
          item
          xs={4}
          className={css(styles.checkInfo)}
        >
          <div className={css(styles.checkInfoItem)}>
            Сумма 200 руб.
          </div>
          <div className={css(styles.checkInfoItem)}>
            Скидка 20 руб.
          </div>
          <div className={css(styles.checkInfoItem)}>
            Итого 180 руб.
          </div>
        </Grid>
        <Grid
          item
          xs={8}
        >
          <div className={css(styles.printBtnDiv)}>
            <Button
              variant="contained"
              color="primary"
              className={css(styles.printBtn)}
            >
              Печать чека
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default TotalPrice
