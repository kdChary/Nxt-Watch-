/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const VideoListItem = styled.li`
  list-style-type: ${props => props.sub && 'disc'};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //   align-items: stretch;
  padding: 0;
  background-color: transparent;
`

export const Image = styled.img`
  width: ${props => (props.thumb ? '100%' : '34px')};
  // height: ${props => props.thumb && '96px'};
  align-self: ${props => (props.thumb ? 'stretch' : 'flex-start')};
  margin-top: ${props => !props.thumb && '13px'};
  margin-right: ${props => !props.thumb && '9px'};
`

export const ItemDetailsCard = styled.div`
  display: flex;
  padding: 9px;
  border: solid 1px #303030;
`

export const VideoText = styled.p`
  font-size: ${props => (props.main ? '15px' : '11px')};
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => (props.dark ? '#cccccc' : '#424242')};
`
