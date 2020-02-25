import React from 'react'
import { css } from 'aphrodite'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

import styles from './styles'

const EnterPageButtons = () => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={css(styles.formGrid)}
    >
      <Link to="/loginterminal">
        <Button
          variant="contained"
          className={css(styles.button)}
        >
          Терминал
        </Button>
      </Link>

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
