import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import history from './history'

const AppRouter: React.FC = () => {

  return (
    <Router history={history}>
      <Switch>

        <Route path="/">
          <div/>
        </Route>

      </Switch>
    </Router>
  )

}

export default AppRouter
