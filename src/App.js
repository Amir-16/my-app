import React from 'react';
import './App.css';
import Fragment from './components/Fragment/Fragment';
import Header from './components/Header/Header';
//import {Button}  from 'react-bootstrap';
import TopHeadlines from './components/TopHeadlines/TopHeadlines';

function App() {
  return (
    <div >
      
      <h2>Online News Portal </h2>
      <Header></Header>
      <Fragment></Fragment>
      <TopHeadlines></TopHeadlines>
  

     
    </div>
  );
}

export default App;
