import React from 'react';
import Todo from './Todo';
import './index.css';
const App = ()=>{
  return(<>
  <h1 className="header">Click On The Buttons to Increase or Decrease the number by 1</h1>
  <Todo/>
  </>);
}

export default App;
