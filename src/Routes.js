import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Repositorios from './pages/Repositorios'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/repositorios/:login" exact component={Repositorios} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
