import React from 'react';
import ReactDOM from 'react-dom';
import Footer from "./Footer";
import Header from './Header';
import MainContent from './MainContent';
import './index.css';

function App() {

  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  App(),
  document.getElementById('root')
);