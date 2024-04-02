import UseRefComp from 'components/UseRefComp/UseRefComp';
import './App.css';
import UseStateComp from './components/UseStateComp/UseStateComp';

function App() {
  return (
    <div className="App">
      <h1>useState</h1>
      <UseStateComp />
      <div className='seperator'></div>
      <h1>useRef</h1>
      <UseRefComp />
    </div>
  );
}

export default App;
