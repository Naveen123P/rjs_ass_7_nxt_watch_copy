import {IoIosClose} from 'react-icons/io'

import ThemContext from '../../context/ThemContext'
import './index.css'

const PremiumBox = () => (
  <ThemContext.Consumer>
    {value => {
      const {displayPremiumBox, closePremiumBox} = value
      const onClickClosePremiumBox = () => {
        closePremiumBox()
      }
      return (
        <>
          {displayPremiumBox && (
            <div className="premium-box-bg">
              <div className="p-b-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                  className="p-b-w-logo"
                />
                <p className="para">
                  Buy Nxt Watch Premium prepaid plans with UPI
                </p>
                <button type="button" className="get-button">
                  GET IT NOW
                </button>
              </div>
              <button
                data-testId="closeButton"
                className="close-button"
                type="button"
                onClick={onClickClosePremiumBox}
              >
                <IoIosClose />{' '}
              </button>
            </div>
          )}
        </>
      )
    }}
  </ThemContext.Consumer>
)

export default PremiumBox
