import React from 'react'
import { css } from 'aphrodite'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import styles from './styles'

const EnterPageButtons = () => {
  return (
    <Grid
      container
      direction="column"
      className={css(styles.formGrid)}
    >
      <Button
        variant="contained"
        className={css(styles.button)}
      >
        Терминал
      </Button>
      <Button
        className={css(styles.lowerButton)}
        variant="contained"
      >
        Админ-панель
      </Button>
    </Grid>
  )
}

export default EnterPageButtons
