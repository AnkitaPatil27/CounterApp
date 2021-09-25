import './App.css';
import Counter from './Components/Counter';
import CounterValue from './Components/CounterValue';
import React, {useState, useEffect} from 'react';

function App() {
  const [count,setCounter] = useState(1);

  
  useEffect(()=>{
      
    fetch('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/202011021.json',{})
      .then((res) => res.json())
      .then(body=> {
          
          console.log(body);
          setCounter(body?body:1);
      })
          
  },[])
  
  
  return (
    <div className="App">      
      <Counter  count={count} setCounter={setCounter}/> 
      <CounterValue count= {count}  />
    </div>
  );
}

export default App;
