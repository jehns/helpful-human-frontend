import React, {useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Header from '../Header'
import Sidebar from '../Sidebar'
import { useAppContext } from '../../context'
import Main from '../Main'


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`


const Layout: React.FC<{}> = () => {
  const [{currentPage}, dispatch] = useAppContext()
  useEffect(() => {
    const pageColors = async () => {
      const pageColors = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/colors?page=${currentPage}&pageSize=12`)
      dispatch({type: 'UPDATE_PAGES', payload: pageColors.data})
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

