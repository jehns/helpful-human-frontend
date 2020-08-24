import React from "react"
import { Route, Switch } from "react-router-dom"
import List from '../components/Main/List'
import SingleColor from '../components/Main/SingleColor'


const AppRouter: React.FC = () => {
  return (
    <Switch>

      <Route path="/colors/:hex">
        <SingleColor />
      </Route>

      <Route path="/random">
        <SingleColor />
      </Route>

      <Route path="/group-color">
        <List group={true}/>
      </Route>

      <Route path="/">
        <List group={false}/>
      </Route>

    </Switch>
  )
}

export default AppRouter
