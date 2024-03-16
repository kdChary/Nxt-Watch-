import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Header from './components/Header'
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
          <ProtectedRoute path="/bad-path" component={NotFoundPage} />
          <ProtectedRoute path="/no-vid" component={FailureView} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
