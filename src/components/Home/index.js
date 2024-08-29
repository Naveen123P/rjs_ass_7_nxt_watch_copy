import {Component} from 'react'
import Cookies from 'js-cookie'
import {MdSearch} from 'react-icons/md'

import ThemContext from '../../context/ThemContext'
import Header from '../Header'
import SideNavigator from '../SideNavigator'
import PremiumBox from '../PremiumBox'
import LoaderView from '../LoaderView'
import FailureView from '../FailureView'
import NoSearchResultView from '../NoSearchResultView'

import {
  Body,
  ContentBg,
  HomeBg,
  SearchInputContainer,
  SearchInput,
  SearchButton,
} from './styledComponent'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN-PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchText: '',
  }

  componentDidMount() {
    this.getSearchItems()
  }

  getSearchItems = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchText} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchText}`
  }

  renderSuccessView = () => <h1>success</h1>

  onChangeSearchInput = event => {
    this.setState({searchText: event.target.value})
  }

  renderSearchInput = isDark => {
    const {searchText} = this.state

    return (
      <SearchInputContainer isDark={isDark}>
        <SearchInput
          isDark={isDark}
          type="search"
          value={searchText}
          placeholder="Search"
          onChange={this.onChangeSearchInput}
        />
        <SearchButton
          isDark={isDark}
          type="button"
          onClick={this.getSearchResult}
        >
          <MdSearch />{' '}
        </SearchButton>
      </SearchInputContainer>
    )
  }

  retry = () => {
    this.getSearchItems()
  }

  renderAllOutputView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView retry={this.retry} />
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return <FailureView retry={this.retry} />
      default:
        return null
    }
  }

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
                    {this.renderSearchInput(isDark)}
                    {this.renderAllOutputView()}
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

export default Home
