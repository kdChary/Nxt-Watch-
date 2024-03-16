import ThemeContext from '../../context/ThemeContext'

import {
  Container,
  FailureImg,
  Heading,
  Text,
  RetryBtn,
} from '../../styledComponents/FailureViewStyling'

const FailureView = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const imageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png '
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      return (
        <Container dark={isDark}>
          <FailureImg src={imageUrl} alt="failure" />
          <Heading dark={isDark}>Oops! Something Went Wrong </Heading>
          <Text dark={isDark}>
            We are having some trouble to complete your request. <br /> Please
            try again.
          </Text>
          <RetryBtn type="button">Retry</RetryBtn>
        </Container>
      )
    }}
  </ThemeContext.Consumer>
)

export default FailureView
