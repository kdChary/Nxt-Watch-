/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

// Styling VideoItemDetails Page containers
export const ResponsivePage = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: ${props => !props.main && 'column'};
  padding: ${props => !props.main && '5px'};
  font-family: 'Roboto';
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
`

export const LoaderContainer = styled(ResponsivePage)`
  display: flex;
  justify-content: center;
  align-items: center;
`

// Styling ReactPlayer section
export const VideoDetailsCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
`
export const AlignDetailsCard = styled(VideoDetailsCard)`
  flex-direction: row;
  align-items: center;
  border: dashed 1.2px #44ffcc;
`

// Styling Text Content...
export const VideoText = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: ${props => (props.dark ? '#e2e8f0' : '#231f20')};
  letter-spacing: 0.7px;
  line-height: 1.5;
`
export const DetailsText = styled(VideoText)`
  font-size: 11px;
  font-weight: 400;
  color: ${props => (props.dark ? '#cbd5e1' : '#231f20')};
  letter-spacing: 0.3;
`

// Styling Buttons..
export const Buttons = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.dark ? '#cbd5e1' : '#606060')};
  color: ${props => props.liked && '#00306e'};
`
// Styling Images...
export const VideoImage = styled.img`
  width: 33px;
  height: 33px;
  margin-right: 11px;
  align-self: center;
`
