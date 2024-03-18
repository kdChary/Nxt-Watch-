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
    <ErrorHeading>Oops! Something Went Wrong</ErrorHeading>
    <ErrorText>
      We are having some trouble to complete your request. <br />
      Please try again.
    </ErrorText>
    <RetryBtn type="button">Retry</RetryBtn>
  </ErrorPageContainer>
)

export default EmptySearchResults
