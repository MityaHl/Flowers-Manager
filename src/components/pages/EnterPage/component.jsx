import React from 'react'
import { css } from 'aphrodite'
import Grid from '@material-ui/core/Grid'
import { Route, Switch, Redirect } from 'react-router-dom'

import EnterPageButtons from '@/components/controls/EnterPageButtons'
import ShopLoginForm from '@/components/pages/ShopLoginForm'

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
      <Route path="/" exact component={EnterPageButtons} />
      <Route path="/loginterminal" exact component={ShopLoginForm} />
    </Grid>
  )
}

export default EnterPage
