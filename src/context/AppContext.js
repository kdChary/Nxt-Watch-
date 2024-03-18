import React from 'react'

const AppContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  activeTab: 'Home',
  savedVideosList: [],
  clickedRetry: () => {},
  removeSavedVideo: () => {},
  addSavedVideo: () => {},
  changeActiveTab: () => {},
})

export default AppContext
