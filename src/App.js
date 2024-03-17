// import {Component} from 'react' Redirect
import {Route, Switch} from 'react-router-dom'

import './App.css'
import LoginForm from './components/LoginPage/LoginForm'

// Replace your code here
// TODO: add pop-ups to Navbar{ menu and logout btn/icon}.
// TODO: add Retry method
const App = () => (
  <Switch>
    <Route path="/login" component={LoginForm} />
  </Switch>
)

export default App
