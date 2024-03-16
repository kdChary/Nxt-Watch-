import ThemeContext from '../../context/ThemeContext'

import {
  Container,
  FailureImg,
  Heading,
  Text,
} from '../../styledComponents/FailureViewStyling'

const NoVideosView = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <Container dark={isDark}>
          <FailureImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <Heading dark={isDark}>No saved videos found</Heading>
          <Text dark={isDark}>You can save videos while watching them</Text>
        </Container>
      )
    }}
  </ThemeContext.Consumer>
)

export default NoVideosView
