import React, { useCallback } from 'react'
import { css } from 'aphrodite'
import { Redirect } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import styles from './styles'

const ShopLoginForm = ({ loginTerminalData, loginShopData, loginTerminal, loginShop }) => {
  const onLoginShop = useCallback(() => {
    loginShop()
  })

  if (loginTerminalData.token) {
    return (
      <Redirect to="/terminal/orders" />
    )
  }

  return (
    <Formik
      initialValues={{
        terminalLogin: '',
        terminalPassword: '',
        floristPassword: '',
      }}
    >
      {({
        values,
      }) => (
        <Form>
          {
            !loginShopData
              ? (
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={css(styles.formGrid)}
                >
                  <Typography variant="h5" component="h2">
                    Вход в магазин
                  </Typography>
                  <Field
                    component={TextField}
                    label="Логин магазина"
                    name="terminalLogin"
                    variant="outlined"
                    className={css(styles.field)} />
                  <Field
                    component={TextField}
                    label="Пароль магазина"
                    name="terminalPassword"
                    type="password"
                    variant="outlined"
                    className={css(styles.field)} />
                  <Button
                    variant="contained"
                    color="primary"
                    className={css(styles.field)}
                    onClick={() => {
                      loginShop(values)
                    }}
                  >
                    Войти в магазин
                  </Button>
                </Grid>
              )
              : (
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={css(styles.formGrid)}
                >
                  <Typography variant="h5" component="h2">
                    Вход в терминал
                  </Typography>
                  <Field
                    component={TextField}
                    name="floristPassword"
                    label="Пароль флориста"
                    type="password"
                    variant="outlined"
                    className={css(styles.field)} />
                  <Button
                    variant="contained"
                    color="primary"
                    className={css(styles.field)}
                    onClick={() => {
                      loginTerminal(values.floristPassword)
                    }}
                  >
                    Войти в терминал
                  </Button>
                </Grid>
              )
          }
        </Form>
      )}
    </Formik>
  )
}

export default ShopLoginForm
