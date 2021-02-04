


import CounterApp from './components/counter'
import './App.css';

function App() {
  return (
    <div className="App">
     <CounterApp by={1}/>
     <CounterApp by= {5}/>
     <CounterApp by= {10}/>
    </div>
  );
}

export default App;
