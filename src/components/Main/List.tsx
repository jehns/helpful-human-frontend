import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../context'

interface Color {
  id: string,
  hex: string
}

interface ColorProps {
  hex: string
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );
  grid-gap: 10px;
`
const ColorWrapper = styled.div`
  padding-bottom: 15px;

`
const ColorContainer = styled.div`
  height: 208px;
  width: 218px;
  ${(props: ColorProps) => `background-color: ${props.hex};`}
`

const TextContainer = styled.div`

`

const MainList: React.FC<{}> = () => {
  const [{ pageColors }, ] = useAppContext()
  return (
   <Wrapper>
      {pageColors.map((color: Color) => {
       return (
        <ColorWrapper key={color.id}>
          <ColorContainer hex={color.hex}/>
          <TextContainer>
            {color.hex}
          </TextContainer>
        </ColorWrapper>
       )
     })}
   </Wrapper>
  )
}

export default MainList

