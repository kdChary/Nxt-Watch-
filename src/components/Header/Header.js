import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {FiSun} from 'react-icons/fi'
import {IoIosMoon} from 'react-icons/io'

import './index.css'
import AppContext from '../../context/AppContext'

const Header = () => {
  const onClickLogout = props => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/')
  }

  const renderPopUpMenu = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark, activeTab, changeActiveTab} = value
        const setHome = () => {
          changeActiveTab('Home')
        }

        const setTrends = () => {
          changeActiveTab('Trend')
        }

        const setGame = () => {
          changeActiveTab('Game')
        }

        const setVideos = () => {
          changeActiveTab('Videos')
        }

        return (
          <Popup trigger={<button type="button">Img</button>} modal>
            {close => (
              <div>
                <button type="button" onClick={close}>
                  &times;
                </button>
                <ul>
                  <li>Home</li>
                  <li>Trending</li>
                  <li>Gaming</li>
                  <li>Saved Videos</li>
                </ul>
              </div>
            )}
          </Popup>
        )
      }}
    </AppContext.Consumer>
  )

  const renderNavbar = isDark => {
    const logoUrl = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

    return (
      <nav>
        <img src={logoUrl} alt="website logo" />
        <div>
          <ul>
            <li>
              <button type="button">
                {isDark ? <FiSun /> : <IoIosMoon />}
              </button>
            </li>
            <li>{renderPopUpMenu()}</li>
            <li>
              <button type="button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </button>
            </li>
            <li>
              <button type="button">Logout</button>
            </li>
          </ul>
          <button type="button">PopLogout</button>
        </div>
      </nav>
    )
  }

  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        console.log(isDark)
        return <>{renderNavbar(isDark)}</>
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
