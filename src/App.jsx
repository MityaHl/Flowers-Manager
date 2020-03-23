import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import TerminalPage from './components/pages/TerminalPage/component'
import EnterPage from '@/components/pages/EnterPage'
import ShopLoginForm from '@/components/pages/ShopLoginForm'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/loginterminal" component={ShopLoginForm} />
        <Route path="/terminal" component={TerminalPage} />
        <Route path="/" exact component={EnterPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
