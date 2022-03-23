import logo from './logo.svg';
import './App.css';
import Counter from "./component/Counter"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My counter
        </p>

        <Counter/>
        
      </header>
    </div>
  );
}

export default App;
