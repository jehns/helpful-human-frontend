import axios from 'axios'


export const getGroupSwatches = async (groupId: string) => {
  const groupColors = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/colors/group?groupId=${groupId}`);
  return groupColors.data.colors
}
