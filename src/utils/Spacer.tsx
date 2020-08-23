import React from 'react'
import styled from 'styled-components'

const DIRECTIONS = {
  width: "width",
  height: "height"
}

interface Props {
  value: number,
  direction?: string,
  unit?: string
}

const SpacerContainer = styled.div`
  ${(props: Props) => props.direction === DIRECTIONS.height && `height: ${props.value}${props.unit};`}
  ${(props: Props) => props.direction === DIRECTIONS.width && `width: ${props.value}${props.unit};`}
  transition: all 0.5s ease;
`

const Spacer: React.FC<Props> = ({ value, direction = 'height', unit = 'px' }) => {
  return (
    <SpacerContainer
      value={value}
      unit={unit}
      direction={direction}
    />
  )
}

export default Spacer
