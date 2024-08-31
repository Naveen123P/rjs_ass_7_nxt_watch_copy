import {Component} from 'react'
import ThemContext from '../../context/ThemContext'

import Header from '../Header'
import SideNavigator from '../SideNavigator'
import PremiumBox from '../PremiumBox'
import {Body, ContentBg, HomeBg} from '../Home/styledComponent'

import {} from './styledComponent'
import './index.css'

class SavedVideosRoute extends Component {
  render() {
    return (
      <ThemContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header />
              <Body isDark={isDark} className="flex-row">
                <SideNavigator />
                <ContentBg>
                  <PremiumBox />
                  <HomeBg isDark={isDark}>
                    <h1>saved videos</h1>
                  </HomeBg>
                </ContentBg>
              </Body>
            </>
          )
        }}
      </ThemContext.Consumer>
    )
  }
}

export default SavedVideosRoute
