import React, {useEffect} from 'react'
import styled from 'styled-components'

import Header from '../Header'
import Sidebar from '../Sidebar'
import { useAppContext } from '../../context'
import Main from '../Main'
import { getSwatches } from '../../services/getSwatches'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`


const Layout: React.FC<{}> = () => {
  const [{ currentPage }, dispatch] = useAppContext()
  useEffect(() => {
    const pageColors = async () => {
      const pageColors = await getSwatches(currentPage)
      dispatch({type: 'UPDATE_PAGES', payload: pageColors})
    }
    pageColors()
  }, [dispatch, currentPage]);

  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </>
  )
}

export default Layout

