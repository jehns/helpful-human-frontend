import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import Spacer from '../../utils/Spacer'
import Button from '../Button'
import ColorGroupList from './ColorGroupList'
import { getRandomColor } from '../../services/getRandomColor'
import { useAppContext } from '../../context'


const Wrapper = styled.div`
  width: 320px;
  background-color: ${props => props.theme.colors.secondary};
  flex-shrink: 0;
  margin-bottom: -5000px;
  padding-bottom: 5000px;
  overflow: hidden;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const Sidebar: React.FC<{}> = () => {
  const [, dispatch] = useAppContext()
  const handleClick = async () => {
    const data = await getRandomColor()
    dispatch({type: 'UPDATE_CURRENT_COLOR', payload: data.randomColor})
    dispatch({type: 'UPDATE_SIMILAR_COLORS', payload: data.similarColors})
  }
  return (
   <Wrapper>
     <Spacer value={80} />
      <TextWrapper>
        <Link to='/random'>
          <Button text="Random Color" handleClick={handleClick} />
        </Link>
      </TextWrapper>
      <Spacer value={37} />
      <ColorGroupList />
   </Wrapper>
  )
}

export default Sidebar

