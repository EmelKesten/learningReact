 import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  );
}

export default App;
