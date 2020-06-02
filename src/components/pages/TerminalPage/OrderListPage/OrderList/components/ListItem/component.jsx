import React from 'react'
import { css } from 'aphrodite'
import Grid from '@material-ui/core/Grid'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import EditIcon from '@material-ui/icons/Edit'
import SearchIcon from '@material-ui/icons/Search'

import styles from './styles'

const ListItem = ({ order }) => {
  return (
    <div className={css(styles.listItem)} key={order.id}>
      <Grid
        container
        direction="row"
      >
        <Grid
          item
          xs={1}
          className={css(styles.listItemInfo)}
        >
          {order.id}
        </Grid>
        <Grid
          item
          xs={2}
          className={css(styles.listItemInfo)}
        >
          {order.date}
        </Grid>
        <Grid
          item
          xs={2}
          className={css(styles.listItemInfo)}
        >
          {order.time}
        </Grid>
        <Grid
          item
          xs={2}
          className={css(styles.listItemInfo)}
        >
          {order.customer}
        </Grid>
        <Grid
          item
          xs={2}
          className={css(styles.listItemInfo)}
        >
          {order.address}
        </Grid>
        <Grid
          item
          xs={1}
          className={css(styles.listItemInfo)}
        >
          {order.price}
        </Grid>
        <Grid
          item
          xs={2}
          className={css(styles.listItemIcons)}
        >
          <SearchIcon className={css(styles.icon)} />
          <EditIcon className={css(styles.icon)} />
          <DeleteOutlineIcon className={css(styles.icon)} />
        </Grid>
      </Grid>
    </div>
  )
}

export default ListItem
