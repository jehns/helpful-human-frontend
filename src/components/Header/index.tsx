import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import Logo from '../../images/logo.svg'
import Input from '../Input'
import { useAppContext } from '../../context'


const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  height: 100px;
  /* min-width: 1440px; */
  overflow: hidden;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
`


const Header: React.FC<{}> = () => {
  const [, dispatch] = useAppContext()
  const handleClick = () => {
    dispatch({type: 'UPDATE_CURRENT_COLOR', payload: null})
  }
  return (
   <Wrapper>
     <Link to="/" onClick={handleClick}>
      <img src={Logo} alt="logo"/>
     </Link>
     <Input placeholderText="Search" />
   </Wrapper>
  )
}

export default Header

