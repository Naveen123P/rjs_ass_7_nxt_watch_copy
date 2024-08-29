import {Component} from 'react'

import Header from '../Header'
import SideNavigator from '../SideNavigator'
import PremiumBox from '../PremiumBox'

import {} from './styledComponent'
import './index.css'

class TrendingRoute extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="flex-row">
          <SideNavigator />
          <div className="flex-start">
            <PremiumBox />
            <h1>Trending Route</h1>
          </div>
        </div>
      </>
    )
  }
}

export default TrendingRoute
