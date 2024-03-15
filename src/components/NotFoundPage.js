import {
  Container,
  Heading,
  NotFoundImg,
  TextContent,
} from '../styledComponents/NotfoundStyling'
import ThemeContext from '../context/ThemeContext'
import Header from './Header'

const NotFoundPage = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const imageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <Container dark={isDark}>
            <NotFoundImg src={imageUrl} alt="notfound" dark={isDark} />
            <Heading dark={isDark}>Page Not Found</Heading>
            <TextContent dark={isDark}>
              We are sorry, the page you requested could not be found.
            </TextContent>
          </Container>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFoundPage
