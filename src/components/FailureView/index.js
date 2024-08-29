import ThemContext from '../../context/ThemContext'

import './index.css'
import {Heading, Para, RetryButton} from './styledComponent'

const FailureView = props => {
  const {retry} = props

  const onClickRetry = () => {
    retry()
  }

  return (
    <ThemContext.Consumer>
      {value => {
        const {isDark} = value
        const src = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <div className="failure-bg">
            <img src={src} alt="no videos" className="on-videos-img" />
            <Heading isDark={isDark}>Oops! Something Went Wrong</Heading>
            <Para isDark={isDark}>
              We are having some trouble to complete your request. Please try
              again.
            </Para>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </div>
        )
      }}
    </ThemContext.Consumer>
  )
}

export default FailureView
