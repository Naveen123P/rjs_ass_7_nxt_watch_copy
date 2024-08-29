import React from 'react'

const ThemContext = React.createContext({
  isDark: '',
  displayPremiumBox: '',
  closePremiumBox: () => {},
  changeThem: () => {},
})

export default ThemContext
