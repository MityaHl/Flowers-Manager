import React, { useState } from 'react'
import { css } from 'aphrodite'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import styles from './styles'

const OrderListSearch = () => {
  const [searchType, setSearchType] = useState(10)

  return (
    <div className={css(styles.orderListControls)}>
      <div className={css(styles.orderListSearch)}>
        <Grid
          container
          direction="column"
          alignItems="center"
        >
          <Typography className={css(styles.typography)}>
            Поиск заказа
          </Typography>
          <FormControl
            variant="outlined"
            className={css(styles.form)}
          >
            <InputLabel>Тип поиска</InputLabel>
            <Select
              value={searchType}
              onChange={e => {
                setSearchType(e.target.value)
              }}
              label="Тип поиска"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField
            className={css(styles.form)}
            id="outlined-search"
            label="Информация"
            variant="outlined" />
          <Button
            variant="contained"
            color="primary"
            className={css(styles.button)}
          >
            Найти
          </Button>
        </Grid>
      </div>
      <div>
        <Grid
          container
          direction="column"
          alignItems="center"
        >
          <Typography className={css(styles.typography)}>
            Сортировка заказов
          </Typography>
          <FormControl
            variant="outlined"
            className={css(styles.form)}
          >
            <InputLabel>Тип сортировки</InputLabel>
            <Select
              value={searchType}
              onChange={e => {
                setSearchType(e.target.value)
              }}
              label="Тип сортировки"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            className={css(styles.button)}
          >
            Отсортировать
          </Button>
        </Grid>
      </div>
    </div>
  )
}

export default OrderListSearch
