/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const VideoListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: ${props => !props.sub && 'column'};
  justify-content: space-around;
  //   align-items: stretch;
  margin-bottom: 11px;
  padding: 0;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    // border: dashed 2px #4fff54;
    width: 275px;
    height: 295px;
    margin: 5px;
  }
`

export const Image = styled.img`
  width: ${props => (props.thumb ? '100%' : '34px')};
  // height: ${props => props.thumb && '96px'};
  align-self: ${props => (props.thumb ? 'stretch' : 'flex-start')};
  margin-top: ${props => !props.thumb && '13px'};
  margin-right: ${props => !props.thumb && '9px'};
`

export const ItemDetailsCard = styled.div`
  display: ${props => props.sub && 'flex'};
  justify-content: ${props => props.sub && 'space-around'};
  padding: ${props => props.sub && '9px'};
  width: ${props => props.sub && '95%'};
  margin-left: ${props => props.sub && 'auto'};
  //   border: solid 1px #303030;
`

export const VideoText = styled.p`
  font-size: ${props => (props.main ? '13px' : '11px')};
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => (props.dark ? '#cccccc' : '#424242')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: ${props => (props.main ? '17px' : '13px')};
  }
`

export const VideoDetailsList = styled.ul`
  //   width: 90%;
  display: flex;
  padding-left: 0;
  list-style-type: disc;
  justify-content: space-around;
  align-items: center;
  //   border: solid 1px #303ff0;
`

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
`
