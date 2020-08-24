import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import { useAppContext } from '../../context'
import Spacer from '../../utils/Spacer'
import SimilarColor from './SimilarColor'
import Button from '../Button'

interface Color {
  id: string,
  hex: string,
  colorGroupId: string,
}

interface HexProps{
  hex: string
}

const SwatchWrapper = styled.div`
  height: 690px;
  width: 1040px;
  border-radius: 9px;
  border: ${props => `1px solid ${props.theme.colors.primary}`};
`

const ColorContainer = styled.div`
  height: 552px;
  width: 100%;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
  ${(props: HexProps) => `background-color: ${props.hex};`}
`

const TextContainer = styled.div`
  height: 138px;
  display: flex;
  align-items: center;
  margin: 0 0 0 24px;
  font-family: 'Source Serif Pro';
  font-size: 48px;
  color: ${props => props.theme.colors.primary};
  padding-bottom: 1px;
`

const SimilarColorsWrapper = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 175px 175px 175px 175px 175px;
`
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SingleColor: React.FC = () => {
  const [{ currentColor, similarColors }, ] = useAppContext()
  const previewColors = similarColors.slice(0, 5)
  if (currentColor) {
    return (
    <>
      <SwatchWrapper key={currentColor.id}>
        <ColorContainer hex={currentColor.hex} />
        <TextContainer>
          {currentColor.hex}
        </TextContainer>
      </SwatchWrapper>

      <Spacer value={30} />

      <SimilarColorsWrapper>
      {previewColors.map((color: Color) => {
        return (
            <SimilarColor color={color} key={color.id}/>
        )
      })}
      </SimilarColorsWrapper>

      <Spacer value={40} />

      <FlexContainer>
        <Link to="/">
          <Button text="Clear" handleClick={() => null}/>
        </Link>
      </FlexContainer>

      <Spacer value={38} />

    </>
    )
  }
  return <div />
}

export default SingleColor

