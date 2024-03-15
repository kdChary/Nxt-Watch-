import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components'
import Login from './components/Login'

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
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
