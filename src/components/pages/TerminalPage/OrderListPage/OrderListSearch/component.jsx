import React, { useState, useCallback } from 'react'
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

const OrderListSearch = ({ sorts, getSortOrders, getSearchOrders, searches }) => {
  const [searchType, setSearchType] = useState('Выбор')
  const [sortType, setSortType] = useState('')
  const [searchInfo, setSearchInfo] = useState('')

  const handleSort = useCallback(() => {
    getSortOrders(sortType)
  })

  const handleSearch = useCallback(() => {
    const searchData = {
      url: searchType,
      param: searchInfo,
    }
    getSearchOrders(searchData)
  })

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
              {
                searches && searches.map((search, index) => (
                  <MenuItem key={search.id} value={search.value}>{search.title}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <TextField
            className={css(styles.form)}
            value={searchInfo}
            onChange={e => {
              setSearchInfo(e.target.value)
            }}
            id="outlined-search"
            label="Информация"
            variant="outlined" />
          <Button
            variant="contained"
            color="primary"
            className={css(styles.button)}
            onClick={handleSearch}
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
              value={sortType}
              onChange={e => {
                setSortType(e.target.value)
              }}
              label="Тип сортировки"
            >
              {
                sorts && sorts.map((sort, index) => (
                  <MenuItem key={sort.id} value={sort.value}>{sort.title}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            className={css(styles.button)}
            onClick={handleSort}
          >
            Отсортировать
          </Button>
        </Grid>
      </div>
    </div>
  )
}

export default OrderListSearch
