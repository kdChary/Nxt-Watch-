/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
`

export const FailureImg = styled.img`
  width: 110px;
  @media screen and (min-width: 420px) {
    width: 223px;
  }
  @media screen and (min-width: 768px) {
    width: 275px;
  }
`

export const Heading = styled.h1`
  font-size: 25px;
  @media screen and (min-width: 420px) {
    font-size: 27px;
  }
  @media screen and (min-width: 768px) {
    font-size: 31px;
  }
  text-align: center;
  color: ${props => (props.dark ? '#f8fafc' : '#231f20')};
`

export const Text = styled.p`
  font-size: 11px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }

  font-weight: 500;
  color: ${props => (props.dark ? '#94a3b8' : '#7e858e')};
  text-align: center;
  line-height: 1.7;
`

export const RetryBtn = styled.button`
  width: 48px;
  height: 29px;
  @media screen and (min-width: 420px) {
    width: 59px;
  }
  @media screen and (min-width: 768px) {
    width: 96px;
  }
  border: solid 1.3px #4f46e5;
  border-radius: 4px;
  background-color: #4f46e5;
  //   padding: 7px 13px;
  font-family: 'Roboto';
  font-size: 11px;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
  font-weight: 500;
  color: #f1f5f9;
  cursor: pointer;
`
