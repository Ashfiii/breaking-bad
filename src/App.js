import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/UI/Header';
import axios from 'axios';
import CharacterGrid from './components/CharacterGrid/CharacterGrid';
import Search from './components/UI/Search';

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`).then(res => {
      console.log(res.data);
      setItems(res.data);
    })

    setIsLoading(false);
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => { setQuery(q) }} />
      <CharacterGrid loading={isLoading} characters={items} />
    </div>
  );
}

export default App;
