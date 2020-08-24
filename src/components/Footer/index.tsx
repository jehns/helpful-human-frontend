import React from 'react'
import styled from 'styled-components'

import { useAppContext } from '../../context'
import { getSwatches } from '../../services/getSwatches'

const Wrapper = styled.div`
  margin: 80px 0 60px 0;
  text-align: center;
`

const PageNumbers = styled.span`
  font-family: 'Source Serif Pro';
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
  padding-right: 28px;
  cursor: pointer;
  text-decoration: ${(props: {current: boolean}) => props.current ? 'underline': ''};
`

const Footer: React.FC<{}> = () => {
  const [{ totalPages, currentPage }, dispatch] = useAppContext()
  const pages = Array.from(Array(totalPages).keys())
  const handlePageClick = async (newPage: number) => {
    const newPages = await getSwatches(newPage)
    dispatch({type: 'UPDATE_PAGES', payload: newPages})
    dispatch({type: 'UPDATE_CURRENT_PAGE', payload: newPage})
  }
  return (
   <Wrapper>
      {pages.map((page: number) => {
        return (
          <PageNumbers current={page === currentPage} onClick={() => handlePageClick(page)} key={page}>
            {page + 1}
          </PageNumbers>
        )
      })}
   </Wrapper>
  )
}

export default Footer
