import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [line, setLine] = useState('');
  const getLine = async () => {
    setLoading(true);
    const { data } = await axios.get('https://rizzapi.vercel.app/random');
    setLine(data.text);
    setLoading(false);
  };
  if (!line) {
    return (
      <>
        <h1>Click The button to get the pickup line</h1>
        <button onClick={getLine}>ClickHere </button>
      </>
    );
  } else {
    return isLoading ? (
      <div>loadingcontent</div>
    ) : (
      <>
        <h1>Created By Tarun, Devansh ,Aryan Khare and Harsh Panchal</h1>
        <h3>{line}</h3>
        <button onClick={getLine}>Get New Line</button>
      </>
    );
  }
}

export default App;
