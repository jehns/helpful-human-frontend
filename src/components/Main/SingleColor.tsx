import React from 'react'
import styled from 'styled-components'

import { useAppContext } from '../../context'


interface ColorProps {
  hex: string
}

const SwatchWrapper = styled.div`
  height: 261px;
  width: 220px;
  border-radius: 6px;
  /* box-shadow: 0px 0px 5px 1px rgba(219,219,219,1); */
  border: ${props => `1px solid ${props.theme.colors.primary}`};
`

const ColorContainer = styled.div`
  height: 208px;
  width: 100%;
  max-width: 218px;
  margin: auto;
  margin-top: 1px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  ${(props: ColorProps) => `background-color: ${props.hex};`}
`

const TextContainer = styled.div`
  height: 52px;
  display: flex;
  align-items: flex-end;
  margin: 0 0 0 24px;
  font-family: 'Source Serif Pro';
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
  padding-bottom: 1px;
`


const SingleColor: React.FC = () => {
  const [{ currentColor }, ] = useAppContext()
  if (currentColor) {
    return (
      <SwatchWrapper key={currentColor.id}>
        <ColorContainer hex={currentColor.hex}/>
        <TextContainer>
          {currentColor.hex}
        </TextContainer>
      </SwatchWrapper>
    )
  }
  return <div />
}

export default SingleColor

