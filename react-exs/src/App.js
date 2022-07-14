import React, {useEffect, useState} from 'react';
 import './App.css';


const Header = (props) => {
  const {name, counter} = props;
  return (
    <div className="header">
      <h1>Hi {name}</h1>
      <h2>Counter: {counter}</h2>
    </div>
  );
}


function App() {
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const increaseCounter = () => { setCounter(counter + 1) }
  const decreaseCounter = () => { setCounter(counter - 1) }

  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> :
      <>
      <Header name="React" counter={counter} />
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </>
    }
    </div>
  );
}

export default App;
