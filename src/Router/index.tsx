import React from "react"
import { Route, Switch } from "react-router-dom"
import List from '../components/Main/List'
import SingleColor from '../components/Main/SingleColor'


const AppRouter: React.FC = () => {
  return (
    <Switch>

      <Route path="/color">
        <SingleColor />
      </Route>

      <Route path="/">
        <List />
      </Route>

    </Switch>
  )
}

export default AppRouter
