import './App.css';
import { Grid } from './grid/Grid';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <Grid />
          <div><button>Move</button></div>
        </div>
      </header>
    </div>
  );
}

export default App;
