import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";

function App() {

  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <Counter counter={counter} setCounter={setCounter}/>
    </div>
  );
}

export default App;
