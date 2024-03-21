import {
  ResponsiveSection,
  ErrorPageContainer,
  ErrorImg,
  ErrorHeading,
  ErrorText,
} from './StyleErrorPages'
import AppContext from '../../context/AppContext'
import Header from '../Header/Header'
import Sidebar from '../Header/Sidebar'

// TODO: add Navbar and Side bar .

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      const imageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <ResponsiveSection>
            <Sidebar />
            <ErrorPageContainer dark={isDark}>
              <ErrorImg src={imageUrl} alt="not found" />
              <ErrorHeading dark={isDark}>Page Not Found</ErrorHeading>
              <ErrorText>
                We are sorry, the page you requested could not be found.
              </ErrorText>
            </ErrorPageContainer>
          </ResponsiveSection>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound
