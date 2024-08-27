import {Component} from 'react'
import ThemContext from '../../context/ThemContext'
import {
  LoginBg,
  LoginContainer,
  LogoImg,
  Label,
  Input,
  CLabel,
} from './styledComponent'
import './index.css'

class LoginForm extends Component {
  state = {
    isChecked: false,
    username: '',
    password: '',
    showSubmitError: true,
    errorMsg: 'asdgsbf',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderUsername = isDark => {
    const {username} = this.state
    return (
      <div className="input-container">
        <Label isDark={isDark} htmlFor="username">
          USERNAME
        </Label>
        <Input
          type="text"
          isDark={isDark}
          value={username}
          id="username"
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </div>
    )
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPassword = isDark => {
    const {password, isChecked} = this.state
    const inputType = isChecked ? 'text' : 'password'
    return (
      <div className="input-container">
        <Label isDark={isDark} htmlFor="password">
          Password
        </Label>
        <Input
          type={inputType}
          isDark={isDark}
          value={password}
          id="password"
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </div>
    )
  }

  onClickCheckBox = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  render() {
    const {isChecked, showSubmitError, errorMsg} = this.state
    return (
      <ThemContext.Consumer>
        {value => {
          const {isDark} = value
          const logoImg = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginBg isDark={isDark}>
              <LoginContainer isDark={isDark}>
                <LogoImg src={logoImg} alt="website logo" />
                <form onSubmit={this.onSubmitForm}>
                  {this.renderUsername(isDark)}
                  {this.renderPassword(isDark)}
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      value={isChecked}
                      id="checkbox"
                      className="checkbox-input"
                      onChange={this.onClickCheckBox}
                    />
                    <CLabel htmlFor="checkbox" isDark={isDark}>
                      Show Password
                    </CLabel>
                  </div>
                  <button type="submit" className="login-button">
                    Login
                  </button>
                  {showSubmitError && (
                    <p className="show-error-mag">*{errorMsg}</p>
                  )}
                </form>
              </LoginContainer>
            </LoginBg>
          )
        }}
      </ThemContext.Consumer>
    )
  }
}

export default LoginForm
