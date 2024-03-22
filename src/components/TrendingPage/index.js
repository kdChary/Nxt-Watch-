import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'

import Header from '../Header/Header'
import FailureView from '../ErrorPages/FailureView'
import AppContext from '../../context/AppContext'
import Sidebar from '../Header/Sidebar'
import TrendingItem from '../TrendingItem'

import {
  ResponsivePage,
  TrendingHeader,
  LoaderContainer,
  MainHeading,
  IconBg,
  TrendingVideosList,
} from './style'

const apiFetchStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingData: [], responseStatus: apiFetchStatus.initial}

  componentDidMount() {
    this.fetchVideos()
  }

  onClickRetry = () => {
    this.fetchVideos()
  }

  modifyFetchedData = data => ({
    channelName: data.channel.name,
    profileUrl: data.channel.profile_image_url,
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    views: data.view_count,
  })

  fetchVideos = async () => {
    this.setState({responseStatus: apiFetchStatus.inProgress})

    const accessToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
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
      //   console.log(readableData)
      this.setState({
        responseStatus: apiFetchStatus.success,
        trendingData: readableData,
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

  renderTrendingPage = isDark => {
    const {trendingData} = this.state

    return (
      <ResponsivePage dark={isDark}>
        <TrendingHeader dark={isDark}>
          <IconBg dark={isDark}>
            <HiFire color="#ff0000" />
          </IconBg>

          <MainHeading dark={isDark}>Trending</MainHeading>
        </TrendingHeader>

        <TrendingVideosList>
          {trendingData.map(video => (
            <TrendingItem key={video.id} videoData={video} isDark={isDark} />
          ))}
        </TrendingVideosList>
      </ResponsivePage>
    )
  }

  renderSuccessView = isDark => {
    const {responseStatus} = this.state

    switch (responseStatus) {
      case apiFetchStatus.inProgress:
        return <>{this.renderLoadingView(isDark)}</>

      case apiFetchStatus.success:
        return <>{this.renderTrendingPage(isDark)}</>

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
              <ResponsivePage dark={isDark} main data-testid="trending">
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

export default Trending
