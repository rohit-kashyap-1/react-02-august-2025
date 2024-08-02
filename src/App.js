import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//state are the variables to store values in react component
function App() {

  let [users, setUsers] = useState([
    "Rohit kumar",
    "Pawan kumar",
    "Haider",
    "Devesh kumar",
    "Shweta kumari",
    "Dolly sharma",
    "piyush sharma"
  ])
  //mapping of a list of users

  return (
    <div className="App p-4">
      <ul>
        {users.map(function (item) {
          return <li>
                    <div>{item}</div>
                    <div></div>
                  </li>
        })}
      </ul>
    </div>
  );
}

export default App;
