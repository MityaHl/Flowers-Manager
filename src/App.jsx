import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import TerminalPage from './components/pages/TerminalPage/component'
import EnterPageButtons from '@/components/controls/EnterPageButtons'
import ShopLoginForm from '@/components/pages/ShopLoginForm'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={EnterPageButtons} />
        <Route path="/loginterminal" exact component={ShopLoginForm} />
        <Route path="/terminal" exact component={TerminalPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
