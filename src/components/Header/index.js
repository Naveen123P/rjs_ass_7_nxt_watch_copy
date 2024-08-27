import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {MdLightbulbOutline} from 'react-icons/md'
import {IoMdMoon} from 'react-icons/io'
import {IoReorderThreeSharp} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'

import ThemContext from '../../context/ThemContext'
import {
  HeaderBg,
  ItemsContainer,
  Button,
  NavModelBg,
  LogoutModelBg,
  Para,
  ConformButton,
  CancelButton,
} from './styledComponent'
import './index.css'

const RoutesList = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED VIDEOS',
}

class Header extends Component {
  state = {
    activeRoute: RoutesList.home,
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  renderLogoutButton = isDark => (
    <Popup
      model
      trigger={
        <Button isDark={isDark} type="button">
          <FiLogOut />{' '}
        </Button>
      }
      //   position="right-bottom"
    >
      {close => (
        <LogoutModelBg isDark={isDark}>
          <Para isDark={isDark}>Are you sure, want to logout ?</Para>
          <div className="flex-row">
            <CancelButton isDark={isDark} type="button" onClick={() => close()}>
              Cancel
            </CancelButton>
            <ConformButton type="button" onClick={this.onClickLogout}>
              Conform
            </ConformButton>
          </div>
        </LogoutModelBg>
      )}
    </Popup>
  )

  renderNavigationView = isDark => (
    <Popup
      model
      trigger={
        <Button isDark={isDark} type="button">
          {' '}
          <IoReorderThreeSharp />{' '}
        </Button>
      }
      position="bottom"
    >
      {close => (
        <NavModelBg isDark={isDark}>
          <p onClick={() => close()}>fghjk</p>
        </NavModelBg>
      )}
    </Popup>
  )

  renderThemItem = (isDark, changeThem) => {
    const onChangeThem = () => {
      changeThem()
    }
    return (
      <div className="them-icon-bg">
        {isDark ? (
          <Button type="button" isDark={isDark} onClick={onChangeThem}>
            <MdLightbulbOutline />{' '}
          </Button>
        ) : (
          <Button type="button" isDark={isDark} onClick={onChangeThem}>
            <IoMdMoon />{' '}
          </Button>
        )}
      </div>
    )
  }

  render() {
    return (
      <ThemContext.Consumer>
        {value => {
          const {isDark, changeThem} = value
          const logoImg = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <HeaderBg isDark={isDark}>
              <Link to="/">
                <img
                  src={logoImg}
                  alt="nxt watch logo"
                  className="nxt-watch-logo"
                />
              </Link>
              <ItemsContainer isDark={isDark}>
                {this.renderThemItem(isDark, changeThem)}
                {this.renderNavigationView(isDark)}
                {this.renderLogoutButton(isDark)}
              </ItemsContainer>
            </HeaderBg>
          )
        }}
      </ThemContext.Consumer>
    )
  }
}

export default withRouter(Header)
