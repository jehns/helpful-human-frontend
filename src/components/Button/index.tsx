import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
  height: 60px;
  width: 260px;
  border-width: 1px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
  font-family: 'Source Serif Pro';
  background-color: #ffffff;
  cursor: pointer;
`

interface Props {
  text: string,
  handleClick: () => any
}

const MainButton: React.FC<Props> = ({ text, handleClick }) => {
  return (
    <>
    <Button onClick={handleClick}>
        {text}
    </Button>
   </>
  )
}

export default MainButton
