import React from 'react'
import styled from 'styled-components'

import Router from '../../Router'

const Wrapper = styled.div`
  width:100%;
  margin: 80px 0 0 40px;
`


const Main: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Router />
    </Wrapper>
  )
}

export default Main

