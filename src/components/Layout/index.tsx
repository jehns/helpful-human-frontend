import React, {useEffect} from 'react'
import axios from 'axios'
// import styled from 'styled-components'

import Header from '../Header'
import Sidebar from '../Sidebar'
import { useAppContext } from '../../context'


const Layout: React.FC<{}> = () => {
  const [{currentPage}, dispatch] = useAppContext()
  useEffect(() => {
    const pageColors = async () => {
      const pageColors = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/colors?page=${currentPage}&pageSize=12`)
      dispatch({type: 'UPDATE_PAGES', payload: pageColors.data})
    }
    pageColors()
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
    </>
  )
}

export default Layout

