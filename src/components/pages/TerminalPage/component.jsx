import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '@/components/blocks/Header'
import OrderListPage from './OrderListPage'
import CreateCheckPage from './CreateCheckPage'
import CreateOrderPage from './CreateOrderPage'

const TerminalPage = ({ access, checkAccess }) => {
  useEffect(() => {
    checkAccess()
  }, [])

  return (
    <div>
      <Header />
      {
        access &&
          <Switch>
            <Route path="/terminal/orders" exact component={OrderListPage} />
            <Route path="/terminal/createorder" exact component={CreateOrderPage} />
            <Route path="/terminal/createcheck" exact component={CreateCheckPage} />
          </Switch>
      }
    </div>
  )
}

export default TerminalPage
