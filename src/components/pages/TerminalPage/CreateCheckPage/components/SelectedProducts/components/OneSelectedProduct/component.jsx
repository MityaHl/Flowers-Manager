import React from 'react'
import { css } from 'aphrodite'
import Grid from '@material-ui/core/Grid'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

import styles from './styles'

const OneSelectedProduct = () => {
  return (
    <div className={css(styles.listItem)}>
      <Grid
        container
      >
        <Grid
          item
          xs={5}
          className={css(styles.listItemInfo)}
        >
          Роза белая 50см.
        </Grid>
        <Grid
          item
          xs={3}
          className={css(styles.listItemInfo)}
        >
          <KeyboardArrowLeftIcon />
          3 шт.
          <KeyboardArrowRightIcon />
        </Grid>
        <Grid
          item
          xs={2}
          className={css(styles.listItemInfo)}
        >
          30 р.
        </Grid>
        <Grid
          item
          xs={2}
          className={css(styles.listItemInfo)}
        >
          90 р.
        </Grid>
      </Grid>
    </div>
  )
}

export default OneSelectedProduct
