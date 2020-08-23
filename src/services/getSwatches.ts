import axios from 'axios'


export const getSwatches = async (currentPage: number) => {
  const PAGE_SIZE = 12;
  const pageColors = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/colors?page=${currentPage}&pageSize=${PAGE_SIZE}`);
  return pageColors.data
}
