/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px;
  border-bottom: ${props => !props.dark && 'solid 2px #d7dfe9'};
`

export const NavLogo = styled.img`
  width: 96px;
  cursor: pointer;
`
export const RightSection = styled.div`
  width: 33%;
  @media (min-width: 768px) {
    width: 147px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NavIcons = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.dark ? '#e2e8f0' : '#383838')};
  font-size: 17px;
  display: block;
  @media (min-width: 768px) {
    display: ${props => props.hide && 'none'};
  }
  cursor: pointer;
`
export const LogoutBtn = styled.button`
  border: solid 1.2px ${props => (!props.dark ? '#3b82f6' : '#ffffff')};
  border-radius: 4px;
  background-color: transparent;
  color: ${props => (!props.dark ? '#3b82f6' : '#ffffff')};
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 11px;
  padding: 4px 9px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  width: 54px;
  height: 29px;
  cursor: pointer;
`
export const ProfileImg = styled.img`
  width: 23px;
  display: none;
  @media screen and (min-width: 768px) {
    display: ${props => props.hide && 'block'};
  }
`
