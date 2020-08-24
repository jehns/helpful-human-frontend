import axios from 'axios'


export const getRandomColor = async () => {
  const randomColor = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/colors/random`);
  return randomColor.data
}
