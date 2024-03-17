import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Header from './components/HeaderComponent/Header'
import NotFoundPage from './components/NotFoundPage'
import FailureView from './components/FailureViews/FailureView'

// Replace your code here
// TODO: add pop-ups to Navbar{ menu and logout btn/icon}.
// TODO: add Retry method
class App extends Component {
  state = {isDark: true}

  toggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state

    return (
      <ThemeContext.Provider value={{isDark, toggleTheme: this.toggleTheme}}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Header} />
          <ProtectedRoute path="/not-found" component={NotFoundPage} />
          <ProtectedRoute path="/no-vid" component={FailureView} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
