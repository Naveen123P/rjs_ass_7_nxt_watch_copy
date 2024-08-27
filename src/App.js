import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import ThemContext from './context/ThemContext'
import LoginForm from './components/LoginForm'

import './App.css'

class App extends Component {
  state = {
    isDark: true,
  }

  render() {
    const {isDark} = this.state
    return (
      <ThemContext.Provider
        value={{
          isDark,
        }}
      >
        <Switch>
          <Route exact path="/" component={LoginForm} />
        </Switch>
      </ThemContext.Provider>
    )
  }
}

export default App
