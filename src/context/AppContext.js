import React from 'react'

const AppContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  savedVideosList: [],
  removeSavedVideo: () => {},
  addSavedVideo: () => {},
  activeTab: 'HOME',
  changeTab: () => {},
})

export default AppContext
