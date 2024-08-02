import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//state are the variables to store values in react component
function App() {

  //e.preventDefault() 
  let [digit,setDigit] = useState(0)
  let [factorial,setFactorial] = useState(1)

  const handleInput  =(event)=>{
    setDigit(event.target.value)
  }

  const getFactorial = ()=>{
    //5 = 5x4x3x2x1
    let fact = 1
     if(digit!=0){
       for(let i=digit;i>=1;i--){
        fact = fact*i;
       }

       setFactorial(fact)
     }
  }
  
  return (
    <div className="App p-4">
      <h1 className='display-1'>{factorial}</h1>
      <input type='text'  value={digit} onChange={handleInput} />
      <button onClick={getFactorial}>Get FActorial</button>

    </div>
  );
}

export default App;
