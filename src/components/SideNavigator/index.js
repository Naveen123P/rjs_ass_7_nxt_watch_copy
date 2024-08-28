import RouteNavigationList from '../RouteNavigationList'
import ThemContext from '../../context/ThemContext'
import {SideContainer, Dummy} from './styledComponent'
import './index.css'

const SideNavigator = () => (
  <ThemContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <SideContainer isDark={isDark} className="side-navigator-container">
          <RouteNavigationList />
        </SideContainer>
      )
    }}
  </ThemContext.Consumer>
)

export default SideNavigator
