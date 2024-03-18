import {
  ErrorPageContainer,
  ErrorImg,
  ErrorHeading,
  ErrorText,
  RetryBtn,
} from './StyleErrorPages'

// TODO: add Context && retry function..

const EmptySearchResults = () => (
  <ErrorPageContainer>
    <ErrorImg
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
      alt="no videos"
    />
    <ErrorHeading>No Search results found</ErrorHeading>
    <ErrorText>Try different key words or remove search filter</ErrorText>
    <RetryBtn type="button">Retry</RetryBtn>
  </ErrorPageContainer>
)

export default EmptySearchResults
