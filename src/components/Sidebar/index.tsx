import React from 'react'
import styled from 'styled-components'
import Spacer from '../../utils/Spacer'
import Button from '../Button'


const Wrapper = styled.div`
  height: 100%;
  width: 320px;
  position: fixed;
  z-index: 1;
  top: 100px;
  left: 0;
  background-color: ${props => props.theme.colors.secondary};
  overflow-x: hidden;
  padding-top: 20px;

`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const Sidebar: React.FC<{}> = () => {
  return (
   <Wrapper>
     <Spacer value={80} />
     <TextWrapper>
      <Button text="Random Color"/>
     </TextWrapper>

   </Wrapper>
  )
}

export default Sidebar

