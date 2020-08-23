import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import { useAppContext } from '../../context'
import Footer from '../Footer'


interface Color {
  id: string,
  hex: string,
  colorGroupId: number,
}

interface ColorProps {
  hex: string
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
  border-radius: 6px;
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

const MainList: React.FC<{}> = () => {
  const [{ pageColors }, dispatch] = useAppContext()
  const handleSwatchClick = (color: Color) => {
    dispatch({type: 'UPDATE_CURRENT_COLOR', payload: color})
  }
  return (
    <>
      <Wrapper>
          {pageColors.map((color: Color) => {
          return (
            <SwatchWrapper key={color.id}>
              <Link to="/color" style={{textDecoration: 'none'}} onClick={() => handleSwatchClick(color)}>
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

