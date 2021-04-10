import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar>
          <h1>
            Header here
          </h1>
        </Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey! I'm Reilly.
        </p>
        <Button>
          <h2>Click here</h2>
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
