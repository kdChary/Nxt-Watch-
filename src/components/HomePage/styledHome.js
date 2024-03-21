/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

export const LoaderView = styled(Loader)`
  font-size: 94px;
  color: ${props => (props.dark ? '#3b82f6' : '#cbdcbd')};
`

// styling videos filter input field..
export const SearchCard = styled.div`
  width: 275px;
  //   height: 33px;
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
  height: 29px;
  color: ${props => (props.dark ? '#cdcdcd' : '#1e2379')};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 13px;
  align-self: stretch;
  padding-left: 13px;
  outline: none;
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
  height: ${props => (props.loader ? '100vh' : '90vh')};
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.loader && 'center'};
  align-items: ${props => props.loader && 'center'};
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  overflow: auto;
`

export const VideosList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  background-color: transparent;
  scroll-behavior: smooth;
  //   position: fixed;

  @media screen and (min-width: 768px) {
    // border: solid 1px #000000;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: auto;
    padding-top: 48px;
  }
`
export const Container = styled(ResponsiveContainer)`
  flex-direction: row;
`
