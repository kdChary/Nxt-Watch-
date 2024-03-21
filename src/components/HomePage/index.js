/* eslint-disable jsx-a11y/control-has-associated-label */
import {Component} from 'react'
import Cookies from 'js-cookie'
import {BiSearchAlt} from 'react-icons/bi'

import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import VideoItem from '../VideoItem'
import FailureView from '../ErrorPages/FailureView'
import EmptySearchResults from '../ErrorPages/EpmtySearchResults'
import AppContext from '../../context/AppContext'

import {
  SearchCard,
  FilterInput,
  SearchBtn,
  ResponsiveContainer,
  VideosList,
  LoaderView,
} from './styledHome'

const apiFetchStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    responseStatus: apiFetchStatus.initial,
    fetchedData: [],
    searchInput: '',
  }

  componentDidMount() {
    this.fetchVideos()
  }

  onClickRetry = () => {
    this.fetchVideos()
  }

  searchInputChange = event => {
    this.setState({searchInput: event.target.value})
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

    const {searchInput} = this.state
    const accessToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      this.setState({
        responseStatus: apiFetchStatus.success,
        fetchedData: readableData,
      })
    } else {
      this.setState({responseStatus: apiFetchStatus.failure})
      console.log('fetch failed')
    }
  }

  filterResults = () => {
    const {fetchedData, searchInput} = this.state

    const filteredVideos = fetchedData.filter(video =>
      video.title.includes(searchInput),
    )

    this.setState({fetchedData: filteredVideos}, this.fetchVideos)
  }

  renderFetchedVideos = isDark => {
    const {fetchedData} = this.state

    if (fetchedData.length < 1) {
      return <EmptySearchResults retry={this.onClickRetry} />
    }

    return (
      <VideosList dark={isDark}>
        {fetchedData.map(video => (
          <VideoItem key={video.id} videoData={video} isDark={isDark} />
        ))}
      </VideosList>
    )
  }

  renderSearchFilter = isDark => {
    const {searchInput} = this.state

    return (
      <SearchCard dark={isDark}>
        <FilterInput
          type="search"
          value={searchInput}
          placeholder="Search"
          onChange={this.searchInputChange}
        />
        <SearchBtn
          type="button"
          dark={isDark}
          onClick={this.filterResults}
          data-testid="searchButton"
        >
          <BiSearchAlt />
        </SearchBtn>
      </SearchCard>
    )
  }

  renderFailureView = () => (
    <>
      <Header />
      <Banner />
      <FailureView retry={this.onClickRetry} />
    </>
  )

  renderLoadingView = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <ResponsiveContainer
            dark={isDark}
            loader
            className="loader-container"
            data-testid="loader"
          >
            <LoaderView
              type="ThreeDots"
              height="80"
              width="80"
              radius={9}
              color={isDark ? '#4fa94d' : '#3b82f6'}
            />
          </ResponsiveContainer>
        )
      }}
    </AppContext.Consumer>
  )

  renderHomePage = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <>
            <Header />
            <ResponsiveContainer dark={isDark}>
              <Banner />
              {this.renderSearchFilter(isDark)}
              {this.renderFetchedVideos(isDark)}
            </ResponsiveContainer>
          </>
        )
      }}
    </AppContext.Consumer>
  )

  render() {
    const {responseStatus} = this.state

    switch (responseStatus) {
      case apiFetchStatus.inProgress:
        return <>{this.renderLoadingView()}</>
      case apiFetchStatus.success:
        return <>{this.renderHomePage()}</>
      case apiFetchStatus.failure:
        return <>{this.renderFailureView()}</>
      default:
        return null
    }
  }
}

export default Home
