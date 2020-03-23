import React, { useState } from 'react'
import { css } from 'aphrodite'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'

import HeaderMenuButtons from '@/components/controls/HeaderMenuButtons'

import styles from './styles'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null)

  const openHeaderMenu = event => {
    setOpenMenu(event.currentTarget)
  }

  const closeHeaderMenu = () => {
    setOpenMenu(null)
  }

  return (
    <div className={css(styles.header)}>
      <Container maxWidth="lg" className={css(styles.container)}>
        <Grid
          container
          className={css(styles.headerGrid)}
        >
          <Grid
            item
            xs={3}
            container
            direction="row"
            alignItems="center"
            className={css(styles.title)}
          >
            Терминал
          </Grid>
          <Grid
            item
            xs={6}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <HeaderMenuButtons />
          </Grid>
          <Grid
            item
            xs={3}
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            className={css(styles.headerSettings)}
          >
            <Button
              onClick={openHeaderMenu}
              className={css(styles.headerButton)}
              endIcon={<ExpandMoreIcon />}
            >
              Florist
            </Button>
            <Menu
              anchorEl={openMenu}
              open={Boolean(openMenu)}
              onClose={closeHeaderMenu}
            >
              <MenuItem onClick={closeHeaderMenu}>
                <Typography>
                  Настроки
                </Typography>
              </MenuItem>
              <MenuItem onClick={closeHeaderMenu}>Выйти</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Header
