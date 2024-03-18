// import {Component} from 'react' Redirect
import {Route, Switch} from 'react-router-dom'

import './App.css'
import LoginForm from './components/LoginPage/LoginForm'
import NotFound from './components/ErrorPages/NotFound'
import NoSavedVideos from './components/ErrorPages/NoSavedVideos'
import Header from './components/Header/Header'

// Replace your code here
// TODO: add pop-ups to Navbar{ menu and logout btn/icon}.
// TODO: add Retry method
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route path="/not-found" component={NotFound} />
    <Route exact path="/error" component={NoSavedVideos} />
    <Route exact path="/1" component={Header} />
  </Switch>
)

export default App
