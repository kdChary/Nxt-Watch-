/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NotFoundImg = styled.img`
  width: 212px;
`

export const Heading = styled.h2`
  color: ${props => (props.dark ? '#f1f5f9' : '#1e293b')};
`

export const TextContent = styled.p`
  font-size: 11px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.dark ? '#cbd5e1' : '#606060')};
  text-align: center;
`
