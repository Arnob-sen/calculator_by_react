import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [result,setResult]=useState('');
  const handleClick=(e)=>{
    setResult(result.concat(e.target.name));
  }
  const clear=()=>
  {
    setResult('');
  }
  const del=()=>
  {
    setResult(result.slice(0,-1));

  }
  const calculate=()=>
  {
    try {
      setResult(eval(result).toString())
      
    } catch (error) {
      setResult('syntax error');
      
    }

  }
  return (
    <div className="App">
     <form>
        <input className='current-operand output' type={'text'} value={result}  />
      </form>

      <div className='buttons'>
        <button id='clear' className='ac span-two' onClick={clear}  >AC</button>
        <button  onClick ={del}>Del</button>

        <button id='divide' name='/' onClick={handleClick}  >&divide;</button>
        <button id='seven' name='7'  onClick={handleClick} >7</button>
        <button id='eight' name='8' onClick={handleClick} >8</button>
        <button id='nine' name='9' onClick={handleClick} >9</button>
        <button id='multiply' name='*' onClick={handleClick} >&times;</button>
        <button id='four' name='4' onClick={handleClick} >4</button>
        <button id='five' name='5' onClick={handleClick} >5</button>
        <button id='six' name='6' onClick={handleClick} >6</button>
        <button id='substract' name='-' onClick={handleClick} >-</button>
        <button id='one' name='1' onClick={handleClick} >1</button>
        <button id='two' name='2' onClick={handleClick} >2</button>
        <button id='three' name='3' onClick={handleClick} >3</button>
        <button id='add' name='+' onClick={handleClick} >+</button>
        <button id='zero' name='0' onClick={handleClick} >0</button>
        <button id='decimal' name='.' onClick={handleClick} >.</button>
        <button id='equal' className='span-two' onClick={calculate} >=</button>
      </div>
    </div>
  
  )
}

export default App;
