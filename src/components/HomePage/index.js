/* eslint-disable jsx-a11y/control-has-associated-label */
import {Component} from 'react'
import Cookies from 'js-cookie'
import {BiSearchAlt} from 'react-icons/bi'

import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import AppContext from '../../context/AppContext'

import {
  SearchCard,
  FilterInput,
  SearchBtn,
  ResponsiveContainer,
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
        <SearchBtn type="button" dark={isDark} onClick={this.filterResults}>
          <BiSearchAlt />
        </SearchBtn>
      </SearchCard>
    )
  }

  render() {
    const {fetchedData} = this.state
    console.log(fetchedData)

    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header />
              <ResponsiveContainer dark={isDark}>
                <Banner />
                {this.renderSearchFilter(isDark)}
              </ResponsiveContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
