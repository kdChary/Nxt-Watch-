import {
  ErrorPageContainer,
  ErrorImg,
  ErrorHeading,
  ErrorText,
  RetryBtn,
} from './StyleErrorPages'
import AppContext from '../../context/AppContext'

const FailureView = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark, clickedRetry} = value
      const imageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      return (
        <ErrorPageContainer>
          <ErrorImg src={imageUrl} alt="failure view" />
          <ErrorHeading>Oops! Something Went Wrong</ErrorHeading>
          <ErrorText>
            We are having some trouble to complete your request. <br />
            Please try again.
          </ErrorText>
          <RetryBtn type="button" onClick={clickedRetry}>
            Retry
          </RetryBtn>
        </ErrorPageContainer>
      )
    }}
  </AppContext.Consumer>
)

export default FailureView
