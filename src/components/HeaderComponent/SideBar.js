import {Link} from 'react-router-dom'

import {HiHome, HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'
import {
  Navbar,
  ItemSection,
  ItemCard,
  SidebarIcon,
  OptionText,
} from '../../styledComponents/SidebarStyling'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <Navbar dark={isDark}>
          <ItemSection dark={isDark}>
            {/* <Link to="/" className="link-item"> */}
            <ItemCard dark={isDark}>
              <SidebarIcon>
                <HiHome />
              </SidebarIcon>
              <OptionText dark={isDark}>Home</OptionText>
            </ItemCard>
            {/* </Link> */}

            {/* <Link to="/" className="link-item"> */}
            <ItemCard dark={isDark}>
              <SidebarIcon>
                <HiFire />
              </SidebarIcon>
              <div className="text-style">
                <OptionText dark={isDark}>Trending</OptionText>
              </div>
            </ItemCard>
            {/* </Link> */}

            <Link to="/" className="link-item">
              <ItemCard dark={isDark}>
                <SidebarIcon>
                  <SiYoutubegaming />
                </SidebarIcon>
                <div className="text-style">
                  <OptionText dark={isDark}>Gaming</OptionText>
                </div>
              </ItemCard>
            </Link>

            <Link to="/" className="link-item">
              <ItemCard dark={isDark}>
                <SidebarIcon>
                  <MdPlaylistAdd />
                </SidebarIcon>
                <div className="text-style">
                  <OptionText dark={isDark}>Saved Videos</OptionText>
                </div>
              </ItemCard>
            </Link>
          </ItemSection>
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
