import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-container__title">Album Single page Application</h1>
      <Link className="home-container__button" to="/albums">ALBUMS</Link>
    </div>
  );
}

export default Home;
