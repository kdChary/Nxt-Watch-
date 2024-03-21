import {withRouter} from 'react-router-dom'

import {IoLogoGameControllerB} from 'react-icons/io'
import {TiHome} from 'react-icons/ti'
import {HiFire} from 'react-icons/hi'
import {RiMenuAddFill} from 'react-icons/ri'

import AppContext from '../../context/AppContext'
import {
  LinkItem,
  SideNavbar,
  NavImg,
  NavOptionsList,
  NavOptionItem,
  OptnContainer,
  PopupBtn,
  PopupText,
  SocialSection,
  SideText,
  SocialIconsCard,
} from './StyleHeader'

const renderSideBarOptions = () => (
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
        <OptnContainer side dark={isDark}>
          <NavOptionsList side>
            <LinkItem to="/">
              <NavOptionItem pop side>
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
      )
    }}
  </AppContext.Consumer>
)

const Sidebar = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <SideNavbar dark={isDark}>
          {renderSideBarOptions()}

          <SocialSection>
            <SideText lg main dark={isDark}>
              Contact Us
            </SideText>

            <SocialIconsCard>
              <NavImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
                dp
              />
              <NavImg
                dp
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <NavImg
                dp
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialIconsCard>

            <SideText dark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </SideText>
          </SocialSection>
        </SideNavbar>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(Sidebar)
