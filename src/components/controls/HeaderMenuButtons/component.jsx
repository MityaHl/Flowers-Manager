import React, { useState } from 'react'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import styles from './styles'

const HeaderMenuButtons = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="white"
      centered
    >
      <Tab
        label={
          <Link to="/terminal/orders" className={css(styles.link)}>Список заказов</Link>
        }
        value={0} />
      <Tab
        label={
          <Link to="/terminal/createorder" className={css(styles.link)}>Создать заказ</Link>
        }
        value={1} />
      <Tab
        label={
          <Link to="/terminal/createcheck" className={css(styles.link)}>Создать чек</Link>
        }
        value={2} />
    </Tabs>
  )
}

export default HeaderMenuButtons
