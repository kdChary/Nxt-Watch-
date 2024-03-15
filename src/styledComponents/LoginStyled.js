/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.div`
  width: 300px;
  height: 270px;
  border: ${props => (props.dark ? 'solid 1px #0f0f0f' : 'solid 1px #ffffff')};
  background-color: ${props => (props.dark ? '#0f0f0f' : '#ffffff')};
  box-shadow: ${props => !props.dark && '0 4px 16px 0 #f4f4f4'};
  padding: 7px;
  border: none;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
export const LoginForm = styled.form`
  width: 90%;
  height: ${props => props.main && '195px'};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: ${props => props.main && 'center'};
`
export const Label = styled.label`
  margin-bottom: ${props => !props.as && '5px'};
  font-size: ${props => (props.as ? '13px' : '9px')};
  font-weight: 500;
  color: ${props => (props.dark ? '#ffffff' : '#7e858e')};
`
export const Input = styled.input`
  border: ${props =>
    props.dark ? 'solid 1.5px #cdcdcd' : 'solid 1.5px #475569'};
  border-radius: 4px;
  //   width: 100%;
  height: 25px;
  @media (min-width: 768px) {
    height: 27px;
  }
  padding-left: 7px;
  background-color: transparent;
  font-size: 11px;
  font-weight: 500;
`
export const LoginBtn = styled.button`
  border: solid 1.3px #3b82f6;
  border-radius: 4px;
  background-color: #3b82f6;
  font-weight: 600;
  font-size: 11px;
  color: #ffffff;
  width: 85%;
  height: 27px;
  padding: 5px 13px;
`
export const AppLogo = styled.img`
  width: 112px;
  @media (min-width: 768px) {
    width: 132px;
  }
`

export const TextContent = styled.p`
  font-size: 11px;
  font-weight: 500;
  color: ${props =>
    props.error ? '#ff0b37' : props.dark ? '#ffffff' : '#231f20'};
  font-family: 'Roboto';
  margin: 0;
`
