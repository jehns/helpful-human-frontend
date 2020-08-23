import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../context'


const Wrapper = styled.div`
  font-size: 28px;
  color: ${props => props.theme.colors.primary};
  font-family: 'Source Serif Pro';
  margin: 0 0 0 30px;
`

const ColorWrapper = styled.div`
  padding-bottom: 15px;
`

interface Color {
  id: string,
  name: string
}

const ColorGroupList: React.FC = () => {
  const [state,] = useAppContext()
  return (
   <Wrapper>
     {state.groupColors.map((color: Color) => {
       return (
        <ColorWrapper key={color.id}>
          {color.name}
        </ColorWrapper>
       )
     })}
   </Wrapper>
  )
}

export default ColorGroupList
