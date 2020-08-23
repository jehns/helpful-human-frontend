import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  height: 100px;
  border: 0;
`


const Footer: React.FC<{}> = () => {
  return (
   <Wrapper>

   </Wrapper>
  )
}

export default Footer

