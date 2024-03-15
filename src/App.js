import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Header from './components/Header'
import NotFoundPage from './components/NotFoundPage'

// Replace your code here
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
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
