import React, { useCallback } from 'react'
import { css } from 'aphrodite'
import { Redirect } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Cookies from 'universal-cookie'

import styles from './styles'

const cookies = new Cookies()

const ShopLoginForm = ({ loginTerminalData, loginShopData, loginTerminal, loginShop, access }) => {
  const onLoginShop = useCallback(() => {
    loginShop()
  })

  if (access) {
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
                    label="Логин "
                    name="terminalLogin"
                    variant="outlined"
                    className={css(styles.field)} />
                  <Field
                    component={TextField}
                    label="Пароль "
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
                      const data = {
                        floristPassword: values.floristPassword,
                        terminalLogin: loginShopData.login,
                        terminalPassword: loginShopData.password,
                      }
                      loginTerminal(data)
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
