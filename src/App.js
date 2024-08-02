import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

//state are the variables to store values in react component
function App() {

  const [users,setUsers] = useState([])

  useEffect(function(){

    fetch('https://dummyjson.com/users?select=firstName').then((response)=>response.json()).then((data)=>{
      setUsers(data.users)
    })

  },[])

  let count = 1

  return (
    <div className="App p-4">
     
      <ul>
        {
        users.map(function (item) {
          return <li key={count++}>
                    <div>{item.firstName}</div>
                    <div></div>
                  </li>
        })}
      </ul>
    </div>
  );
}

export default App;
