import React from 'react'
import styled from 'styled-components'


const Input = styled.input`
  height: 60px;
  width: 320px;
  border-width: 1px;
  border-radius: 4px;
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
  font-family: Helvetica;
  background-color: #ffffff;
  padding-left: 21px;
  &:focus {
    outline:0;
  }
`

interface Props {
  placeholderText: string
}

const MainInput: React.FC<Props> = ({ placeholderText }) => {
  return (
    <Input placeholder={placeholderText}/>
  )
}

export default MainInput
