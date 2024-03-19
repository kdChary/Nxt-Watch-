/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const ErrorPageContainer = styled.div`
  width: 100%;
  height: 90vh;
  margin: 0;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const ErrorImg = styled.img`
  width: 170px;
  margin-bottom: 11px;
  @media screen and (min-width: 768px) {
    width: 315px;
  }
`

export const ErrorHeading = styled.h2`
  color: ${props => (props.dark ? '#f1f5f9' : '#1e293b')};
  font-weight: 600;
  font-size: 19px;
  margin-top: 9px;
  margin-bottom: 3px;
  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
`

export const ErrorText = styled.p`
  color: #94a3b8; //${props => (props.dark ? '#f1f5f9' : '#1e293b')};
  font-weight: 500;
  font-size: 11px;
  margin-top: 9px;
  margin-bottom: 3px;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`

export const RetryBtn = styled.button`
  border: solid 1.2px #4f46e5;
  border-radius: 4px;
  background-color: #4f46e5;
  color: #ffffff;
  padding: 7px 17px;
  font-weight: 600;
  font-size: 13px;
  margin-top: 11px;
  cursor: pointer;
`
