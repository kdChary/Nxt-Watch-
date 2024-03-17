/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 20vw;
  min-height: 90vh;
  position: absolute;
  left: 0;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 13px 3px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  //   border-right: ${props => !props.dark && 'solid 2px #d7dfe9'};
`

export const ItemSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  height: 135px;
  width: 90%;
`

export const ItemCard = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  &:hover,
  &:active {
    background-color: ${props => (props.dark ? '#383838' : '#f1f5f9')};
    color: ${props => (props.dark ? '#f8fafc' : '#1e293b')};
    font-weight: 600;
    font-size: 15px;
  }
  border: solid 1px #ffff00;
`

export const SidebarIcon = styled.button`
  font-size: 17px;
  color: #606060;
  width: 30px;
  align-items: center;
  &:hover,
  &:active {
    color: #ff0b37;
  }
  background-color: transparent;
  border: none;
`
export const OptionText = styled.button`
  background-color: transparent;
  border: none;
  //   width: 93px;
  margin-left: 11px;
  font-size: 13px;
  color: ${props => (props.dark ? '#f8fafc' : '#616e7c')};
  font-weight: 500;
  &:hover,
  &:active {
    color: ${props => (props.dark ? '#f8fafc' : '#1e293b')};
    font-weight: 600;
    font-size: 15px;
  }
  text-align: left;
`
