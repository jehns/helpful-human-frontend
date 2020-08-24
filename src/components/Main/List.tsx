import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import { useAppContext } from '../../context'
import Footer from '../Footer'
import { getGroupSwatches } from '../../services/getGroupSwatches'


interface Color {
  id: string,
  hex: string,
  colorGroupId: string,
}

interface ColorProps {
  hex: string
}

interface Props {
  group: boolean
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 54px;
  grid-template-columns: 218px 218px 218px 218px;
  /* grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) ); */
`
const SwatchWrapper = styled.div`
  height: 261px;
  width: 220px;
  border-radius: 9px;
  box-shadow: 0px 0px 5px 1px rgba(219,219,219,1);
  border: '1px solid #dbdbdb';
  cursor: pointer;
`
const ColorContainer = styled.div`
  height: 208px;
  width: 100%;
  max-width: 218px;
  margin: auto;
  margin-top: 1px;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
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

const MainList: React.FC<Props> = ({group}) => {
  const [{ pageColors, similarColors }, dispatch] = useAppContext()
  const handleSwatchClick = async (color: Color) => {
    const similarColors = await getGroupSwatches(color.colorGroupId)
    dispatch({type: 'UPDATE_CURRENT_COLOR', payload: color})
    dispatch({type: 'UPDATE_SIMILAR_COLORS', payload: similarColors})
  }
  const renderColors = group ? similarColors : pageColors
  return (
    <>
      <Wrapper>
          {renderColors.map((color: Color) => {
          return (
            <SwatchWrapper key={color.id}>
              <Link to={`/colors/${color.hex.slice(1)}`} style={{textDecoration: 'none'}} onClick={() => handleSwatchClick(color)}>
                <ColorContainer hex={color.hex}/>
                <TextContainer>
                  {color.hex}
                </TextContainer>
              </Link>
            </SwatchWrapper>
          )
        })}
      </Wrapper>
      <Footer />
    </>
  )
}

export default MainList

