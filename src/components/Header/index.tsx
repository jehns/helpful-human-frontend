import React from 'react'
import styled from 'styled-components'
import Logo from '../../images/logo.svg'
import Spacer from '../../utils/Spacer'

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  height: 100px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`


const Header: React.FC<{}> = () => {
  return (
   <Wrapper>
     <Spacer direction="width" value={30} />
     <img src={Logo} alt="logo"/>
   </Wrapper>
  )
}

export default Header

