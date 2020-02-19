import React from 'react'
import EnterPage from './components/pages/EnterPage'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <EnterPage />
    </BrowserRouter>
  )
}

export default App
