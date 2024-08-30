import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import ThemContext from './context/ThemContext'
import Home from './components/Home'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'

import './App.css'

class App extends Component {
  state = {
    isDark: true,
    displayPremiumBox: true,
    savedVideos: [],
  }

  changeThem = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  closePremiumBox = () => {
    this.setState({displayPremiumBox: false})
  }

  //   saveOrDeleteVideo = (newVideo) => {

  //       this.setState({prevState => ({savedVideos: [...prevState.savedVideos, newVideo]})})
  //   }

  render() {
    const {isDark, displayPremiumBox, savedVideos} = this.state
    return (
      <ThemContext.Provider
        value={{
          isDark,
          displayPremiumBox,
          savedVideos,
          saveOrDeleteVideo: this.saveOrDeleteVideo,
          changeThem: this.changeThem,
          closePremiumBox: this.closePremiumBox,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
        </Switch>
      </ThemContext.Provider>
    )
  }
}

export default App
