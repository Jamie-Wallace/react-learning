import React from 'react';
import './App.css';

function App() {
  let row = [];

  for (let index = 0; index < 10; index++) {
      row.push(<div key={index} className='square'></div>);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div data-testid='row_1'>
          {row}
        </div>
      </header>
    </div>
  );
}

export default App;
