import React, {useEffect, useState} from 'react';
import './App.css';
import './Movies.css';
import axios from 'axios';
import TopMovies from './top-movies/Index.js';


function App() {
  return (
    <div className="App">
      <TopMovies />
    </div>
  );
}

export default App;
