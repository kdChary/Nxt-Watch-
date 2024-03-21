/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import {Link} from 'react-router-dom'

// Styling Link component ...
export const LinkItem = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto';
`

// styling List items..
export const ListItem = styled.li`
  width: 100%;
  display: 'flex';
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`

// Styling containers
export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  //   flex-direction: column;
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: row;
`

// Styling images.
export const Thumbnail = styled.img`
  width: ${props => (props.sm ? '29px' : '275px')};
  @media screen and (min-width: 576px) {
    width: ${props => (props.sm ? '32px' : '295px')};
  }
`

// Styling text Content..
export const Text = styled.p`
  font-size: 11px;
  font-weight: 600;
  color: ${props => (props.dark ? '#e2e8f0' : '#231f20')};
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`
