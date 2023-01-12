import React from 'react';
import './App.css';
import { Row } from './grid/Row';
import {Square} from './grid/Square';

function App() {
  let row = [];

  for (let index = 0; index < 10; index++) {
      row.push(<Square key={index} value="-"/>);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Row />
      </header>
    </div>
  );
}

export default App;
