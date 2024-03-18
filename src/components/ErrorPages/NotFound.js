import {
  ErrorPageContainer,
  ErrorImg,
  ErrorHeading,
  ErrorText,
} from './StyleErrorPages'
import AppContext from '../../context/AppContext'

// TODO: add Navbar and Side bar .

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      const imageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <ErrorPageContainer dark={isDark}>
          <ErrorImg src={imageUrl} alt="Not Found" />
          <ErrorHeading dark={isDark}>Page Not Found</ErrorHeading>
          <ErrorText>
            We are sorry, the page you requested could not be found
          </ErrorText>
        </ErrorPageContainer>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound
