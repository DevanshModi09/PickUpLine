import { useState } from 'react';
import './App.css';
import { fetchPickUpLine } from './api';
import Credits from './components/Credits';
import LineCard from './components/LineCard';
import Footer from './components/Footer';
import FallingHearts from './components/FallingHearts';

function App() {
  const [isLoading, setLoading] = useState(false);
  const [line, setLine] = useState('');
  const [error, setError] = useState('');
  const [burst, setBurst] = useState(0);

  const getLine = async () => {
    setLoading(true);
    setError('');
    try {
      const text = await fetchPickUpLine();
      setLine(text);
      setBurst((b) => b + 1);
    } catch {
      setError('Could not fetch a line right now. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <FallingHearts trigger={burst} />
      {line && <Credits />}
      {!line && !isLoading && (
        <h1>Click the button to get a pickup line</h1>
      )}
      {isLoading && (
        <div className="loading" role="status">
          <span className="spinner" aria-hidden="true" />
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {line && !isLoading && <LineCard line={line} />}
      {error && !isLoading && <p className="error">{error}</p>}
      <button className="primary-button" onClick={getLine} disabled={isLoading}>
        {isLoading ? 'Loading...' : line ? 'Get New Line' : 'Click Here'}
      </button>
      <Footer />
    </div>
  );
}

export default App;
