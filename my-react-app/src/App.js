import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setUser(data))
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <Count></Count>

      { 
        users.map( user => <Users name={user.name} username={user.username} email={user.email}></Users> )
      }
       
      </header>
    </div>
  );
}

function Count() {

  let [count, setCount] = useState(0);
  if (count < 0) {
    count = 0;
  }
 

  
  return(
    <div>
        <h3>Ticket Counter : {count}</h3>
        <button style={{color:'black'}} onClick={() => setCount(count + 1)}>add ticket</button> 
        <button style={{color:'black'}} onClick={() => setCount(count - 1)}>remove ticket</button>
    </div>
  )
}

function Users(props) {
  const divStyle={
    width: '300px',
    backgroundColor: 'lightgrey',
    borderRadius: '5px',
    color:'black',
    padding:'10px',
    margin: '20px'
  }

  
  return(
    <div style={divStyle}>
       <h4 style={{textAlign:'start'}}>Name: {props.name}</h4>
       <p style={{textAlign:'start' ,fontSize: '18px', marginBottom: '0'}}>UserName: {props.username}</p>
       <p style={{textAlign:'start', fontSize: '18px', marginTop: '0'}}>Email: {props.email}</p>
        
    </div>
  )
}



export default App;
