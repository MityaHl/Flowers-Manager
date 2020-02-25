import React from 'react'
import { css } from 'aphrodite'
import { Redirect } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import styles from './styles'

const ShopLoginForm = ({ isLoginTerminal, isLoginShop, loginTerminal, loginShop }) => {
  const onLoginTerminal = () => {
    loginTerminal()
  }

  const onLoginShop = () => {
    loginShop()
  }

  if (isLoginTerminal) {
    return (
      <Redirect to="/terminal" />
    )
  }

  return (
    <Formik
      initialValues={{
        shopName: '',
        shopPassword: '',
        sellerPassword: '',
      }}
    >
      {({
        values,
      }) => (
        <Form>
          {
            !isLoginShop
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
                    name="shopName"
                    variant="outlined"
                    className={css(styles.field)} />
                  <Field
                    component={TextField}
                    label="Пароль магазина"
                    name="shopPassword"
                    type="password"
                    variant="outlined"
                    className={css(styles.field)} />
                  <Button
                    variant="contained"
                    color="primary"
                    className={css(styles.field)}
                    onClick={onLoginShop}
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
                    name="sellerPassword"
                    label="Пароль флориста"
                    type="password"
                    variant="outlined"
                    className={css(styles.field)} />
                  <Button
                    variant="contained"
                    color="primary"
                    className={css(styles.field)}
                    onClick={onLoginTerminal}
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
