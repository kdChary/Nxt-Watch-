/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  box-sizing: border-box;
`
export const ResponsiveContainer = styled.div`
  border: none;
  border-radius: 13px;
  box-shadow: ${props => !props.dark && '0 4px 16px 0 #cccccc'};
  background-color: ${props => props.dark && '#0f0f0f'};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 3px;
  width: 275px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const InputContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: ${props => !props.checkbox && 'column'};
  //   justify-content: ${props => !props.checkbox && 'space-between'};
  align-items: ${props => props.checkbox && 'center'};
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: ${props => (props.type === 'checkbox' ? '13px' : '90%')};
  height: 27px;
  @media screen and (min-width: 768px) {
    width: ${props => props.checkbox && '21px'};
    height: 31px;
  }
  border: solid 1.3px #475569;
  border-radius: 3.4px;
  background-color: transparent;
  font-size: 11px;
  font-weight: 600;
  margin-top: 3px;
  padding-left: 7px;
  color: ${props => (props.dark ? '#e2e8f0' : '#1e293b')};
  outline: none;
`

export const Label = styled.label`
  color: ${props => (props.dark ? '#cbd5e1' : '#1e293b')};
  font-size: 9px;
  font-weight: 600;
  margin-top: ${props => !props.checkbox && '7px'};
  align-self: ${props => props.checkbox && 'center'};
`

export const WebsiteLogo = styled.img`
  width: 135px;
  margin: 7px 0;
  @media screen and (min-width: 768px) {
    width: 145px;
  }
`

export const Form = styled.form`
  width: 80%;
  margin-top: 7px;
  margin-bottom: 7px;
  display: flex;
  flex-direction: column;
  //   align-items: center;
`

export const LoginBtn = styled.button`
  width: 90%;
  height: 25px;
  border: solid 1.2px #3b82f6;
  border-radius: 4px;
  background-color: #3b82f6;
  font-size: 11px;
  font-weight: 600;
  color: #ffffff;
  align-self: stretch;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-weight: 600;
  font-size: 9px;
  font-family: 'Roboto';
  margin-top: 0;
`
