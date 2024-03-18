import {
  ErrorPageContainer,
  ErrorImg,
  ErrorHeading,
  ErrorText,
} from './StyleErrorPages'

// TODO: add Navbar and Side bar implement Context.

const NotFound = () => (
  <ErrorPageContainer dark>
    <ErrorImg
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
      alt="Not Found"
    />
    <ErrorHeading dark>Page Not Found</ErrorHeading>
    <ErrorText>
      We are sorry, the page you requested could not be found
    </ErrorText>
  </ErrorPageContainer>
)

export default NotFound
