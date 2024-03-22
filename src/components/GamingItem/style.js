/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto';
  //   margin-top: 13px;
`
// Styling Gaming Item containers
export const GameDetailsCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 11px;
  padding-left: 7px;
  //   border: solid 1px #3f34f0;
`
export const GameViewsCard = styled(GameDetailsCard)`
  padding: 0;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    padding-right: 7.3px;
  }
`

// Styling List item..
export const Game = styled.li`
  display: flex;
  flex-direction: column;
  width: 125px;
  margin: 11px 7px;
  @media screen and (min-width: 425px) {
    width: 130px;
  }
`

// Styling Text content
export const GameTitle = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
  letter-spacing: ${props => props.lg && '0.7px'};
  color: ${props => (props.dark ? '#e2e8f0' : '#231f20')};
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`
export const GameData = styled(GameTitle)`
  font-size: 9px;
  font-weight: 500;
  color: ${props => (props.dark ? '#cbd5e1' : '#475569')};
`

//  Styling Game Image
export const Thumbnail = styled.img`
  width: 100%;
`
