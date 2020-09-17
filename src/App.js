import React from 'react';
import logo from './logo.svg';
import './App.css';
import NumberList from './components/NumberList';
import NameForm from './components/NameForm';

function App() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="App">
     {/* <NumberList numbers = {numbers}/> */}
     <NameForm/>
    </div>
  );
}

export default App;
