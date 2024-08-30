import React from 'react'

const ThemContext = React.createContext({
  isDark: '',
  displayPremiumBox: '',
  savedVideos: [],
  saveOrDeleteVideo: () => {},
  closePremiumBox: () => {},
  changeThem: () => {},
})

export default ThemContext
