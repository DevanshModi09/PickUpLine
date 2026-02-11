import axios from 'axios';

export async function fetchPickUpLine() {
  const { data } = await axios.get('https://rizzapi.vercel.app/random');
  return data.text;
}
