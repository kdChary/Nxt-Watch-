/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const BannerContainer = styled.div`
  width:100%
  height: 5vh;
  padding: 23px;
  background-color: #ffffff;
  @media screen and (min-width: 425px){
      background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
      background-size: cover;
  }
`
export const LogoCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AppLogo = styled.img`
  width: 144px;
  @media screen and (min-width: 768px) {
    width: 173px;
  }
`
export const BannerBtn = styled.button`
  border: ${props => (props.cross ? 'none' : 'solid 1.8px #1e293b')};
  border-radius: ${props => !props.cross && '3px'};
  background-color: transparent;
  color: #1e293b;
  font-weight: 600;
  font-family: 'Roboto';
  font-size: ${props => !props.cross && '13px'};
  padding: ${props => !props.cross && '3px 13px'};

  cursor: pointer;
  outline: none;
  transition: font-size 4s 1s;
  &:hover {
    font-size: ${props => props.cross && '31px'};
  }
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: '15px';
  color: #1e293b;
`
