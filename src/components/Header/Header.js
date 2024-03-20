/* eslint-disable jsx-a11y/control-has-associated-label */
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {IoIosMoon, IoLogoGameControllerB} from 'react-icons/io'
import {TiThMenu, TiHome} from 'react-icons/ti'
import {HiFire} from 'react-icons/hi'
import {RiMenuAddFill} from 'react-icons/ri'

import './index.css'
import AppContext from '../../context/AppContext'
import {
  LinkItem,
  Navbar,
  NavImg,
  NavOptionsList,
  NavOptionItem,
  OptnContainer,
  NavOptnBtn,
  LogoutBtn,
  CloseMenuBtn,
  PopupBtn,
  PopupText,
  PopLogoutCard,
  PopBtnsCard,
  ModelLogoOutBtn,
} from './StyleHeader'

// TODO: add ActiveTab function.,

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    history.replace('/login')
    Cookies.remove('jwt_token')
  }

  const renderPopUpMenu = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark, activeTab, changeTab} = value

        const setHome = () => {
          changeTab('HOME')
        }
        const setTrending = () => {
          changeTab('TRENDING')
        }
        const setGaming = () => {
          changeTab('GAMING')
        }
        const setSavedVideos = () => {
          changeTab('SAVED_VIDEOS')
        }

        return (
          <Popup
            trigger={
              <NavOptnBtn dark={isDark} type="button">
                <TiThMenu />
              </NavOptnBtn>
            }
            modal
          >
            {close => (
              <OptnContainer pop dark={isDark}>
                <CloseMenuBtn type="button" onClick={close}>
                  &times;
                </CloseMenuBtn>
                <NavOptionsList pop>
                  <LinkItem to="/">
                    <NavOptionItem pop>
                      <PopupBtn
                        active={activeTab === 'HOME'}
                        dark={isDark}
                        onClick={setHome}
                      >
                        <TiHome /> <PopupText dark={isDark}> Home</PopupText>
                      </PopupBtn>
                    </NavOptionItem>
                  </LinkItem>

                  <LinkItem to="/trending">
                    <NavOptionItem pop>
                      <PopupBtn
                        dark={isDark}
                        active={activeTab === 'TRENDING'}
                        onClick={setTrending}
                      >
                        <HiFire /> <PopupText dark={isDark}>Trending</PopupText>
                      </PopupBtn>
                    </NavOptionItem>
                  </LinkItem>

                  <LinkItem to="/gaming">
                    <NavOptionItem pop>
                      <PopupBtn
                        dark={isDark}
                        active={activeTab === 'GAMING'}
                        onClick={setGaming}
                      >
                        <IoLogoGameControllerB />
                        <PopupText dark={isDark}>Gaming</PopupText>
                      </PopupBtn>
                    </NavOptionItem>
                  </LinkItem>

                  <LinkItem to="/saved-videos">
                    <NavOptionItem pop>
                      <PopupBtn
                        dark={isDark}
                        active={activeTab === 'SAVED_VIDEOS'}
                        onClick={setSavedVideos}
                      >
                        <RiMenuAddFill />
                        <PopupText dark={isDark}>Saved Videos</PopupText>
                      </PopupBtn>
                    </NavOptionItem>
                  </LinkItem>
                </NavOptionsList>
              </OptnContainer>
            )}
          </Popup>
        )
      }}
    </AppContext.Consumer>
  )

  const renderLogoutPopupLg = isDark => (
    <Popup
      modal
      trigger={
        <LogoutBtn dark={isDark} type="button">
          Logout
        </LogoutBtn>
      }
    >
      {close => (
        <PopLogoutCard pop dark={isDark}>
          <PopupText dark={isDark} logout>
            Are you sure you want to logout?
          </PopupText>

          <PopBtnsCard>
            <ModelLogoOutBtn outline type="button" onClick={close}>
              Cancel
            </ModelLogoOutBtn>
            <ModelLogoOutBtn type="button" onClick={onClickLogout}>
              Confirm
            </ModelLogoOutBtn>
          </PopBtnsCard>
        </PopLogoutCard>
      )}
    </Popup>
  )

  const renderLogoutPopupSm = isDark => (
    <Popup
      modal
      trigger={
        <NavOptnBtn type="button" dark={isDark}>
          <FiLogOut />
        </NavOptnBtn>
      }
    >
      {close => (
        <PopLogoutCard pop dark={isDark}>
          <ModelLogoOutBtn outline type="button" onClick={close}>
            Cancel
          </ModelLogoOutBtn>
          <ModelLogoOutBtn type="button" onClick={onClickLogout}>
            Confirm
          </ModelLogoOutBtn>
        </PopLogoutCard>
      )}
    </Popup>
  )

  const renderNavbar = (isDark, changeTheme) => {
    const logoUrl = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

    return (
      <Navbar dark={isDark}>
        <LinkItem to="/">
          <NavImg src={logoUrl} alt="website logo" />
        </LinkItem>

        <OptnContainer>
          <NavOptionsList>
            <NavOptionItem>
              <NavOptnBtn type="button" dark={isDark} onClick={changeTheme}>
                {isDark ? <FiSun /> : <IoIosMoon />}
              </NavOptnBtn>
            </NavOptionItem>

            <NavOptionItem sm>{renderPopUpMenu()}</NavOptionItem>

            <NavOptionItem hide>
              <NavOptnBtn type="button" dark={isDark}>
                <NavImg
                  dp
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </NavOptnBtn>
            </NavOptionItem>

            <NavOptionItem sm>{renderLogoutPopupSm(isDark)}</NavOptionItem>

            <NavOptionItem>{renderLogoutPopupLg(isDark)}</NavOptionItem>
          </NavOptionsList>
        </OptnContainer>
      </Navbar>
    )
  }

  return (
    <AppContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        return <>{renderNavbar(isDark, changeTheme)}</>
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
