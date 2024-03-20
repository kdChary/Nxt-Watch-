import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import LoginForm from './components/LoginPage/LoginForm'
import NotFound from './components/ErrorPages/NotFound'
import AppContext from './context/AppContext'

// Replace your code here
// TODO: add pop-ups to Navbar{ menu and logout btn/icon}.
// TODO: add Retry method
class App extends Component {
  state = {isDark: false, activeTab: 'HOME', savedVideosList: []}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  changeTab = val => {
    this.setState({activeTab: val})
  }

  render() {
    const {isDark, activeTab, savedVideosList} = this.state
    return (
      <AppContext.Provider
        value={{
          isDark,
          activeTab,
          savedVideosList,
          changeTab: this.changeTab,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" component={NotFound} />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
