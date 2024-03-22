/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

// Styling Gaming Page containers
export const ResponsivePage = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: ${props => !props.main && 'column'};
  justify-content: ${props => !props.main && 'space-between'};
  padding: 0;
  //   margin: -1;
  font-family: 'Roboto';
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
`
export const GamingHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -10px;
  background-color: ${props => (props.dark ? '#181818' : '#f1f1f1')};
  //   position: absolute;
`
export const LoaderContainer = styled(ResponsivePage)`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const IconBg = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 24px;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#e2e8f0')};
  font-size: 29px;
`

// Styling TextContent
export const MainHeading = styled.h2`
  color: ${props => (props.dark ? '#f8fafc' : '1e293b')};
  margin-left: 9px;
  letter-spacing: 0.5px;
`

// Styling List
export const GamingVideosList = styled.ul`
  padding: 0;
  overflow: auto;
  scroll-behavior: smooth;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  //   border: solid 3px #4f44f4;
`
