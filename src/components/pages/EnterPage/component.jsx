import React from 'react'
import { css } from 'aphrodite'
import Grid from '@material-ui/core/Grid'

import EnterPageButtons from '@/components/controls/EnterPageButtons'

import styles from './styles'

const EnterPage = () => {
  return (
    <Grid
      container
      className={css(styles.formBlock)}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <EnterPageButtons />
    </Grid>
  )
}

export default EnterPage
