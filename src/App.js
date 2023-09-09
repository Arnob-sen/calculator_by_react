import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  return (
    <div className="App">
     <form>
        <input className='current-operand output' type={'text'}  />
      </form>

      <div className='buttons'>
        <button className='ac span-two'  >AC</button>
        <button onClick >Del</button>

        <button id='divide' name='/'  >&divide;</button>
        <button id='seven' name='7'  >7</button>
        <button id='eight' name='8'  >8</button>
        <button id='nine' name='9'  >9</button>
        <button id='multiply' name='*'  >&times;</button>
        <button id='four' name='4'  >4</button>
        <button id='five' name='5'  >5</button>
        <button id='six' name='6'  >6</button>
        <button id='substract' name='-'  >-</button>
        <button id='one' name='1'  >1</button>
        <button id='two' name='2'  >2</button>
        <button id='three' name='3'  >3</button>
        <button id='add' name='+'  >+</button>
        <button id='zero' name='0'  >0</button>
        <button id='decimal' name='.'  >.</button>
        <button id='equal' className='span-two' >=</button>
      </div>
    </div>
  
  )
}

export default App;
