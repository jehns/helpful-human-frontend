import React from 'react'
import styled from 'styled-components'
import Spacer from '../../utils/Spacer'
import Button from '../Button'
import ColorGroupList from './ColorGroupList'


const Wrapper = styled.div`
  width: 320px;
  background-color: ${props => props.theme.colors.secondary};
  flex-shrink: 0;
  margin-bottom: -5000px;
  padding-bottom: 5000px;
  overflow: hidden;
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
      <Spacer value={37} />
      <ColorGroupList />
   </Wrapper>
  )
}

export default Sidebar

