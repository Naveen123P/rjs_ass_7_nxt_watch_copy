import {Component} from 'react'

import Header from '../Header'
import SideNavigator from '../SideNavigator'
import {} from './styledComponent'
import './index.css'

class TrendingRoute extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="flex-row">
          <SideNavigator />
          <h1>Trending Route</h1>
        </div>
      </>
    )
  }
}

export default TrendingRoute
