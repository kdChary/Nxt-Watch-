import {
  ErrorPageContainer,
  ErrorImg,
  ErrorHeading,
  ErrorText,
  RetryBtn,
} from './StyleErrorPages'

// TODO: add Context && retry function/dark&light Images..

const FailureView = () => (
  <ErrorPageContainer>
    <ErrorImg
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
      alt="failure view"
    />
    <ErrorHeading>Oops! Something Went Wrong</ErrorHeading>
    <ErrorText>
      We are having some trouble to complete your request. <br />
      Please try again.
    </ErrorText>
    <RetryBtn type="button">Retry</RetryBtn>
  </ErrorPageContainer>
)

export default FailureView
