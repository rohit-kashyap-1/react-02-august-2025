import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

//state are the variables to store values in react component
function App() {

  const [login,setLogin] = useState(true)

  return (
    <div className="App p-4">
      {(login==false)?<div className='border rounded p-4 w-50'>
        <h1>Login</h1>
        <p>login form</p>
      </div>:<div className='border rounded p-4 w-50'>
        <h1>Dashboard</h1>
        <p>Dashboard area</p>
      </div>}
      
      <hr></hr>
      <button onClick={()=>{setLogin(true)}}>Login True</button>
      <button onClick={()=>{setLogin(false)}}>Login False</button>

      

    </div>
  );
}

export default App;
