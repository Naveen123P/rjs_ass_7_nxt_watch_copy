import {Link} from 'react-router-dom'

import ThemContext from '../../context/ThemContext'
// import {VideoItem, Title} from './styledComponent'

import {ListItem} from '../Header/RouteItems/styledComponent'
import {Title} from '../HomeVideoItem/styledComponent'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <ThemContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <ListItem isDark={isDark}>
            <Link to={`/videos/${id}`} className="link">
              <div className="trend-div">
                <img
                  src={thumbnailUrl}
                  alt="thumbnail"
                  className="thumbnail trend-thumbnail"
                />
                <div className="profile-title-bg">
                  <div className="title-container">
                    <Title isDark={isDark}>{title}</Title>
                    <div className="channel-views-pub-bg flex-row sm-flex-wrap">
                      <p className="para">{viewCount} Watching Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ListItem>
        )
      }}
    </ThemContext.Consumer>
  )
}

export default GamingVideoItem
