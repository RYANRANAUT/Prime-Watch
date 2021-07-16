/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onKeyDown = event => {
    if (event.keyCode === 13) handleClick();
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>Sorry No results</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={handleClick}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
