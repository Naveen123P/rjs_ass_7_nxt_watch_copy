import React from 'react'

const ThemContext = React.createContext({
  isDark: '',
  changeThem: () => {},
})

export default ThemContext
