import React from 'react'
import { css } from 'aphrodite'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

import styles from './styles'

const EnterPageButtons = () => {
  return (
    <Grid
      container
      direction="column"
      className={css(styles.formGrid)}
    >
      <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
        variant="outlined" />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined" />
    </Grid>
  )
}

export default EnterPageButtons
