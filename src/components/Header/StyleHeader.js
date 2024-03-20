/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import {Link} from 'react-router-dom'

// Styling Link component
export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const Navbar = styled.nav`
  height: 10vh;
  width: 100%;
  border-bottom: ${props => !props.dark && 'solid 2.6px #94a3b8'};
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 13px;
  font-family: 'Roboto';
`

export const NavImg = styled.img`
  width: ${props => (props.dp ? '27px' : '76px')};
  @media screen and (min-width: 425px) {
    width: ${props => (props.dp ? '27px' : '120px')};
  }
  @media screen and (min-width: 768px) {
    width: ${props => (props.dp ? '27px' : '168px')};
  }
`

export const OptnContainer = styled.div`
  border: ${props => props.pop && !props.dark && 'solid 2.7px #f1f5f8'};
  border-radius: ${props => props.pop && '7px'};
  box-shadow: ${props => props.pop && '0 4px 16px 0 #94a3b8'};
  background-color: ${props =>
    (props.dark && props.pop && '#212121') ||
    (props.pop && !props.dark && '#ffffff')};
  align-self: stretch;
  width: ${props => (props.pop ? '230px' : '35%')};
  display: flex;
  flex-direction: ${props => props.pop && 'column'};
  justify-content: ${props => !props.pop && 'space-between'};
  align-items: ${props => !props.pop && 'center'};
  @media screen and (min-width: 768px) {
    width: 30%;
    justify-content: space-around;
  }
`

export const NavOptionsList = styled.ul`
  height: ${props => props.pop && '153px'};
  //   padding: ${props => props.pop && '4px'};
  width: ${props => (props.pop ? '230px' : '70%')};

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  padding-left: 0;
  display: flex;
  flex-direction: ${props => props.pop && 'column'};
  justify-content: space-between;
  align-items: ${props => !props.pop && 'center'};
`

export const NavOptionItem = styled.li`
  list-style-type: none;
  //   border: solid 1px #4f4556;
  display: ${props =>
    (props.hide && 'none') || (props.sm && 'block') || (props.pop && 'flex')};

  @media screen and (min-width: 768px) {
    display: ${props => (props.hide && 'block') || (props.sm && 'none')};
  }
  //   &:hover,
  //   &:active {

  //   }
`

export const NavOptnBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 21px;
  font-weight: 600;
  color: ${props => (props.dark ? '#ffffff' : '#231f20')};
outline: none;
  cursor: pointer;
  }
  @media screen and (min-width:767px){
      font-size: 27px;
  }
`

export const LogoutBtn = styled.button`
  border: ${props =>
    props.dark ? 'solid 1.2px #ffffff' : 'solid 2.2px #4f46e5'};
  border-radius: 4px;
  background-color: transparent;
  color: ${props => (props.dark ? '#ffffff' : '#4f46e5')};
  font-weight: 700;
  font-size: 16px;
  padding: 5px 13px;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

// Popup content Styling...
export const CloseMenuBtn = styled(NavOptnBtn)`
  align-self: flex-end;
  margin-bottom: -23px;
  font-size: 21px;
  color: #94a3b8;
`

export const PopupBtn = styled.button`
  width: 100%;
  display: flex;
  padding: 7px 0 7px 37px;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 21px;
  font-weight: 500;
  outline: none;
  color: #94a3b8;
  cursor: pointer;
  color: ${props => props.active && '#ff0000'};
  background-color: ${props =>
    props.active ? (props.dark ? '#383838' : '#f1f5f9') : ''};
  font-weight: ${props => props.active && '700'};
  //   &:hover,
  //   &:active {
  //   }
`

export const PopupText = styled.p`
  font-size: ${props => (props.logout ? '15px' : '15px')};
  @media screen and (min-width: 768px) {
    font-size: ${props => (props.logout ? '19px' : '15px')};
  }
  font-family: 'Roboto';
  font-weight: ${props => props.logout && 600};
  text-align: ${props => props.logout && 'center'};
  margin-bottom: ${props => props.logout && '11px'};
  color: ${props => (props.dark ? '#ffffff' : '#231f20')};
  margin: 1px 0 -2px 5px;
`

// Styling Logout popup

export const PopLogoutCard = styled(OptnContainer)`
  justify-content: space-around;
  padding: 25px 13px;
  @media screen and (min-width: 768px) {
    width: 430px;
  }
  height: 175px;
`
export const PopBtnsCard = styled.div`
  display: flex;
  //   flex-direction: row;
  //   flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`
export const ModelLogoOutBtn = styled(LogoutBtn)`
  display: block;
  border: ${props =>
    props.outline ? 'solid 1.2px #7e858e' : 'solid 2.2px #4f46e5'};
  background-color: ${props => (props.outline ? 'transparent' : '#4f46e5')};
  color: ${props => (props.outline ? '#7e858e' : '#ffffff')};
  width: 45%;
  height: 32px;
`
