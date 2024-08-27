import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import ThemContext from './context/ThemContext'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'

import './App.css'

class App extends Component {
  state = {
    isDark: true,
  }

  changeThem = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <ThemContext.Provider
        value={{
          isDark,
          changeThem: this.changeThem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </ThemContext.Provider>
    )
  }
}

export default App
