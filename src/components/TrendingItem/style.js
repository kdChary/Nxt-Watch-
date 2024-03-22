/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

// Styling imported component ...
export const LinkItem = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto';
  margin-top: 13px;
`
export const Dot = styled(BsDot)`
  font-size: 15px;
  display: ${props => props.hide && 'none'};
`

// Styling containers
export const ItemContainer = styled.div`
  width: 96%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    width: 45%;
    justify-content: flex-start;
    align-self: flex-start;
  }
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: space-around;
  align-items: center;
  //   border: solid 1px #4f4eff;
  @media screen and (min-width: 576px) {
    margin: 0;
    // align-items: flex-start;
    justify-content: flex-start;
  }
`
export const ChannelViewsData = styled(ChannelDetails)`
  justify-content: flex-end;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0;
  }
`
export const ViewsData = styled(ChannelDetails)`
  width: 75%;
  justify-content: center;
  @media screen and (min-width: 576px) {
    justify-content: flex-start;
    width: 100%;
    margin-top: 0;
  }
`

// styling List items..
export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //   border: solid 1.3px #34f000;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

// Styling images.
export const Thumbnail = styled.img`
  width: ${props => (props.sm ? '29px' : '100%')};
  margin: ${props => props.sm && '3px'};
  @media screen and (min-width: 576px) {
    width: ${props => (props.sm ? '32px' : '50%')};
  }
`

// Styling text Content..
export const Text = styled.p`
  font-size: 11px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0;
  margin-left: 6px;
  color: ${props => (props.dark ? '#e2e8f0' : '#231f20')};
  @media screen and (min-width: 576px) {
    font-size: 15px;
    // margin-left: 9px;
  }
`
export const ViewsText = styled(Text)`
  font-weight: 500;
  margin-left: 0;
  margin-right: 15px;
  color: ${props => (props.dark ? '#cbd5e1' : '#475569')};
  @media screen and (min-width: 576px) {
    margin-left: ${props => props.sm && '9px'};
  }
`
