import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {IoIosMoon} from 'react-icons/io'
import {TiThMenu} from 'react-icons/ti'

import ThemeContext from '../context/ThemeContext'
import {
  Navbar,
  NavLogo,
  RightSection,
  NavIcons,
  LogoutBtn,
  ProfileImg,
} from '../styledComponents/HeaderStyling'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, toggleTheme} = value

      const changeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props

        history.replace('/login')
      }

      const logoUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const renderRightSection = () => (
        <RightSection dark={isDark}>
          {isDark ? (
            <NavIcons dark={isDark} onClick={changeTheme}>
              <FiSun />
            </NavIcons>
          ) : (
            <NavIcons dark={isDark} onClick={changeTheme}>
              <IoIosMoon />
            </NavIcons>
          )}

          <NavIcons dark={isDark} hide>
            <TiThMenu />
          </NavIcons>
          <ProfileImg
            hide
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />

          <NavIcons dark={isDark} onClick={onClickLogout} hide>
            <FiLogOut />
          </NavIcons>
          <LogoutBtn dark={isDark} onClick={onClickLogout}>
            Logout
          </LogoutBtn>
        </RightSection>
      )
      return (
        <Navbar dark={isDark}>
          <Link to="/">
            <NavLogo src={logoUrl} alt="website logo" />
          </Link>
          {renderRightSection()}
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
