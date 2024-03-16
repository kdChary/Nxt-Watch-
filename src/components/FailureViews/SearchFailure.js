import ThemeContext from '../../context/ThemeContext'

import {
  Container,
  FailureImg,
  Heading,
  Text,
  RetryBtn,
} from '../../styledComponents/FailureViewStyling'

const SearchFailure = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const imageUrl =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
      return (
        <Container dark={isDark}>
          <FailureImg src={imageUrl} alt="no videos" />
          <Heading dark={isDark}>No Search results found</Heading>
          <Text dark={isDark}>
            Try different key words or remove search filter
          </Text>
          <RetryBtn type="button">Retry</RetryBtn>
        </Container>
      )
    }}
  </ThemeContext.Consumer>
)

export default SearchFailure
