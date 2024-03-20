/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

// styling videos filter input field..
export const SearchCard = styled.div`
  width: 90%;
  height: 27px;
  align-self: center;
  border: solid 2.3px #475569;
  border-radius: 4px;
  background-color: transparent;
  color: #475569;
  display: flex;
  margin-top: 13px;
`

export const FilterInput = styled.input`
  border: none;
  border-right: solid 2.3px #475569;
  background-color: transparent;
  width: 90%;
  color: #cdcdcd;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 13px;
  align-self: stretch;
  padding-left: 13px;
`

export const SearchBtn = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.dark ? '#cdcdcd' : '#383838')};
  font-size: 15.7px;
  width: 10%;
  background-color: ${props => (props.dark ? '#313131' : '#f4f4f4')};
`

// styling main Home container

export const ResponsiveContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.dark ? '#181818' : '#f1f5f9')};
`

export const VideosList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  background-color: transparent;
`
