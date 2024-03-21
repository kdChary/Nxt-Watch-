/* eslint-disable jsx-a11y/control-has-associated-label */
import {Component} from 'react'
import {IoIosClose} from 'react-icons/io'

import {
  BannerContainer,
  LogoCard,
  AppLogo,
  BannerBtn,
  BannerText,
} from './StyledBanner'

class Banner extends Component {
  state = {showBanner: true}

  hideBanner = () => {
    this.setState(prevState => ({showBanner: !prevState.showBanner}))
  }

  render() {
    const {showBanner} = this.state

    if (showBanner) {
      return (
        <BannerContainer data-testid="banner">
          <LogoCard>
            <AppLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <BannerBtn
              cross
              type="button"
              onClick={this.hideBanner}
              data-testid="close"
            >
              <IoIosClose size="23" color="#181818" />
            </BannerBtn>
          </LogoCard>
          <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
          <BannerBtn type="button"> GET IT NOW</BannerBtn>
        </BannerContainer>
      )
    }
    return null
  }
}

export default Banner
