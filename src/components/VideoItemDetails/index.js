import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player/youtube'

import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiMenuAddLine} from 'react-icons/ri'
import {formatDistanceToNow} from 'date-fns'

import Header from '../Header/Header'
import FailureView from '../ErrorPages/FailureView'
import AppContext from '../../context/AppContext'
import Sidebar from '../Header/Sidebar'

import './index.css'
import {
  ResponsivePage,
  LoaderContainer,
  VideoDetailsCard,
  VideoImage,
  AlignDetailsCard,
  DetailsText,
  VideoText,
  Buttons,
} from './style'

const apiFetchStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    responseStatus: apiFetchStatus.initial,
    liked: false,
    disLiked: false,
    saved: false,
  }

  componentDidMount() {
    this.fetchVideos()
  }

  onClickRetry = () => {
    this.fetchVideos()
  }

  onClickLike = () => {
    this.setState(prevState => ({liked: !prevState.liked}))
  }

  onClickDislike = () => {
    this.setState(prevState => ({disLiked: !prevState.disLiked}))
  }

  onClickSave = () => {
    this.setState(prevState => ({saved: !prevState.saved}))
  }

  modifyFetchedData = data => ({
    id: data.id,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    views: data.view_count,
    videoUrl: data.video_url,
    description: data.description,
    date: data.published_at,
    name: data.channel.name,
    profilePic: data.channel.profile_image_url,
    subscribers: data.channel.subscriber_count,
  })

  fetchVideos = async () => {
    this.setState({responseStatus: apiFetchStatus.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const accessToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${accessToken}`},
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const modifiedData = this.modifyFetchedData(data.video_details)
      //   console.log(modifiedData)

      this.setState({
        responseStatus: apiFetchStatus.success,
        videoDetails: modifiedData,
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

  renderReactPlayer = isDark => {
    const {videoDetails, liked, disLiked, saved} = this.state
    const {videoUrl, title, views, date, profilePic} = videoDetails

    return (
      <ResponsivePage dark={isDark}>
        <div>
          <div className="react-player-large">
            <ReactPlayer url={videoUrl} controls width="100%" height="315px" />
          </div>
          <div className="react-player-small">
            <ReactPlayer url={videoUrl} controls width="100%" height="195px" />
          </div>
          <VideoDetailsCard>
            <AlignDetailsCard>
              <VideoImage src={profilePic} alt="channel logo" />
              <VideoText dark={isDark}>{title}</VideoText>
            </AlignDetailsCard>

            <AlignDetailsCard>
              <DetailsText dark={isDark}>{`${views} views`}</DetailsText>

              <BsDot size="23" color="#e2e8f0" />

              <DetailsText dark={isDark}>
                {formatDistanceToNow(new Date(date), {addSuffix: true})}
              </DetailsText>
            </AlignDetailsCard>

            <AlignDetailsCard>
              <Buttons
                type="button"
                dark={isDark}
                onClick={this.onClickLike}
                clicked={liked}
              >
                <AiOutlineLike /> Like
              </Buttons>

              <Buttons
                type="button"
                dark={isDark}
                onClick={this.onClickDislike}
                clicked={disLiked}
              >
                <AiOutlineDislike /> Dislike
              </Buttons>

              <Buttons
                type="button"
                dark={isDark}
                onClick={this.onClickSave}
                clicked={saved}
              >
                <RiMenuAddLine /> Save
              </Buttons>
            </AlignDetailsCard>
          </VideoDetailsCard>
        </div>
      </ResponsivePage>
    )
  }

  renderSuccessView = isDark => {
    const {responseStatus} = this.state

    switch (responseStatus) {
      case apiFetchStatus.inProgress:
        return <>{this.renderLoadingView(isDark)}</>

      case apiFetchStatus.success:
        return <>{this.renderReactPlayer(isDark)}</>

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
              <ResponsivePage dark={isDark} main data-testid="videoItemDetails">
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

export default VideoItemDetails
