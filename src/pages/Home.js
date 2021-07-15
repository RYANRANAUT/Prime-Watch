/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
  const [input, setInput] = useState('');

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    // https://api.tvmaze.com/search/shows?q=men
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => {
        console.log(result);
      });
  };

  const onKeyDown = event => {
    if (event.keyCode === 13) handleClick();
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
    </MainPageLayout>
  );
};

export default Home;
