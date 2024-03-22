import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'

import Header from '../Header/Header'
import FailureView from '../ErrorPages/FailureView'
import AppContext from '../../context/AppContext'
import Sidebar from '../Header/Sidebar'
import GamingItem from '../GamingItem'

import {
  ResponsivePage,
  GamingHeader,
  LoaderContainer,
  MainHeading,
  IconBg,
  GamingVideosList,
} from './style'

const apiFetchStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingData: [], responseStatus: apiFetchStatus.initial}

  componentDidMount() {
    this.fetchVideos()
  }

  onClickRetry = () => {
    this.fetchVideos()
  }

  modifyFetchedData = data => ({
    id: data.id,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    views: data.view_count,
  })

  fetchVideos = async () => {
    this.setState({responseStatus: apiFetchStatus.inProgress})

    const accessToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${accessToken}`},
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const readableData = data.videos.map(video =>
        this.modifyFetchedData(video),
      )
      console.log(data)
      this.setState({
        responseStatus: apiFetchStatus.success,
        gamingData: readableData,
      })
    } else {
      this.setState({responseStatus: apiFetchStatus.failure})
      console.log('fetch failed')
    }
  }

  renderFailureView = () => <FailureView retry={this.onClickRetry} />

  renderLoadingView = isDark => (
    <LoaderContainer dark={isDark}>
      <div className="loader-container" data-testid="loader">
        <Loader
          type="ThreeDots"
          height="80"
          width="80"
          radius={9}
          color={isDark ? '#4fa94d' : '#3b82f6'}
        />
      </div>
    </LoaderContainer>
  )

  renderGamingPage = isDark => {
    const {gamingData} = this.state
    // console.log('dinesh')

    return (
      <ResponsivePage dark={isDark}>
        <GamingHeader dark={isDark}>
          <IconBg dark={isDark}>
            <SiYoutubegaming color="#ff0000" />
          </IconBg>

          <MainHeading dark={isDark}>Gaming</MainHeading>
        </GamingHeader>

        <GamingVideosList>
          {gamingData.map(video => (
            <GamingItem key={video.id} videoData={video} isDark={isDark} />
          ))}
        </GamingVideosList>
      </ResponsivePage>
    )
  }

  renderSuccessView = isDark => {
    const {responseStatus} = this.state

    switch (responseStatus) {
      case apiFetchStatus.inProgress:
        return <>{this.renderLoadingView(isDark)}</>

      case apiFetchStatus.success:
        return <>{this.renderGamingPage(isDark)}</>

      case apiFetchStatus.failure:
        return <>{this.renderFailureView()}</>

      default:
        return null
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header />
              <ResponsivePage dark={isDark} main data-testid="gaming">
                <Sidebar />
                {this.renderSuccessView(isDark)}
              </ResponsivePage>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Gaming
