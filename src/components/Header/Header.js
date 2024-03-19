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
  ModelLogoOutBtn,
} from './StyleHeader'

// TODO: add Link, logout-trigger,

const Header = () => {
  const onClickLogout = props => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/')
  }

  const renderPopUpMenu = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Popup
            trigger={
              <NavOptnBtn type="button">
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
                      <PopupBtn dark={isDark}>
                        <TiHome /> <PopupText dark={isDark}> Home</PopupText>
                      </PopupBtn>
                    </NavOptionItem>
                  </LinkItem>

                  <LinkItem to="/trending">
                    <NavOptionItem pop>
                      <PopupBtn dark={isDark}>
                        <HiFire /> <PopupText dark={isDark}>Trending</PopupText>
                      </PopupBtn>
                    </NavOptionItem>
                  </LinkItem>

                  <LinkItem to="/gaming">
                    <NavOptionItem pop>
                      <PopupBtn dark={isDark}>
                        <IoLogoGameControllerB />
                        <PopupText dark={isDark}>Gaming</PopupText>
                      </PopupBtn>
                    </NavOptionItem>
                  </LinkItem>

                  <LinkItem to="/saved-videos">
                    <NavOptionItem pop>
                      <PopupBtn dark={isDark}>
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

  const renderNavbar = isDark => {
    const logoUrl = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

    return (
      <Navbar dark={isDark}>
        <NavImg src={logoUrl} alt="website logo" />
        <OptnContainer>
          <NavOptionsList>
            <NavOptionItem>
              <NavOptnBtn type="button" dark={isDark}>
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
        const {isDark} = value
        console.log(isDark)
        return <>{renderNavbar(isDark)}</>
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
