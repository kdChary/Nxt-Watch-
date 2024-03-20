import {
  ErrorPageContainer,
  ErrorImg,
  ErrorHeading,
  ErrorText,
  RetryBtn,
} from './StyleErrorPages'
import AppContext from '../../context/AppContext'

// TODO: add Context && retry function..

const EmptySearchResults = props => {
  const {retry} = props
  const clickedRetry = () => {
    retry()
  }
  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <ErrorPageContainer dark={isDark}>
            <ErrorImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <ErrorHeading dark={isDark}>No Search results found</ErrorHeading>
            <ErrorText>
              Try different key words or remove search filter
            </ErrorText>
            <RetryBtn type="button" onClick={clickedRetry}>
              Retry
            </RetryBtn>
          </ErrorPageContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default EmptySearchResults
