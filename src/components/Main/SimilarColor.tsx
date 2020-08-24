import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import { useAppContext } from '../../context'


interface ColorProps {
  hex: string
}

interface Color {
  id: string,
  hex: string,
  colorGroupId: string,
}


interface Props {
  color: Color
}

const SwatchWrapper = styled.div`
  height: 175px;
  width: 175px;
  border-radius: 9px;
  box-shadow: 0px 0px 3px 1px rgba(219,219,219,1);
  border: '1px solid #dbdbdb';
  cursor: pointer;
`

const ColorContainer = styled.div`
  height: 109px;
  width: 100%;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
  ${(props: ColorProps) => `background-color: ${props.hex};`}
`

const TextContainer = styled.div`
  height: 66px;
  display: flex;
  align-items: center;
  margin: 0 0 0 24px;
  font-family: 'Source Serif Pro';
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
`


const SimilarColor: React.FC<Props> = ({color}) => {
  const [, dispatch] = useAppContext()
  const handleSwatchClick = (color: Color) => {
    dispatch({type: 'UPDATE_CURRENT_COLOR', payload: color})
  }
  return (
    <Link to={`/colors/${color.hex.slice(1)}`}>
      <SwatchWrapper onClick={() => handleSwatchClick(color)}>
        <ColorContainer hex={color.hex}/>
        <TextContainer>
          {color.hex}
        </TextContainer>
      </SwatchWrapper>
    </Link>
  )
}

export default SimilarColor
