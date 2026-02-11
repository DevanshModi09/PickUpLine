import axios from 'axios';

export async function fetchPickUpLine() {
  const { data } = await axios.get(import.meta.env.VITE_PICKUP_LINE_API_URL);
  return data.text;
}
