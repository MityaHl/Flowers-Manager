import React from 'react'
import { css } from 'aphrodite'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'

import styles from './styles'

const ShopLoginForm = () => {
  return (
    <Grid
      container
      direction="column"
      className={css(styles.formGrid)}
    >
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
            <InputLabel className={css(styles.label)}>
              Вход в терминал
            </InputLabel>
            <Field
              component={TextField}
              label="Логин магазина"
              name="shopName"
              variant="outlined" />
            <Field
              component={TextField}
              label="Пароль магазина"
              name="shopPassword"
              type="password"
              variant="outlined"
              className={css(styles.field)} />
            <Field
              component={TextField}
              name="sellerPassword"
              label="Пароль флориста"
              type="password"
              variant="outlined"
              className={css(styles.field)} />
          </Form>
        )}
      </Formik>
    </Grid>
  )
}

export default ShopLoginForm
