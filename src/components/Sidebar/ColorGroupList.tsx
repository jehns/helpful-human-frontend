import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

import { useAppContext } from '../../context'
import { getGroupSwatches } from '../../services/getGroupSwatches'


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
  const [{ groupColors }, dispatch] = useAppContext()
  const handleColorClick = async (color: Color) => {
    const colors = await getGroupSwatches(color.id)
    dispatch({type: 'UPDATE_SIMILAR_COLORS', payload: colors})
  }
  return (
   <Wrapper>
     {groupColors.map((color: Color) => {
       return (
         <Link to="/group-color" key={color.id} style={{textDecoration: 'none', color: "#363C3C"}}>
          <ColorWrapper onClick={() => handleColorClick(color)}>
            {color.name}
          </ColorWrapper>
         </Link>
       )
     })}
   </Wrapper>
  )
}

export default ColorGroupList
