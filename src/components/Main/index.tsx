import React from 'react'
import styled from 'styled-components'

import List from './List'

const Wrapper = styled.div`
  width:100%;
  margin: 80px 0 0 40px;
`


const Main: React.FC<{}> = () => {
  return (
    <Wrapper>
      <List />
    </Wrapper>
  )
}

export default Main

