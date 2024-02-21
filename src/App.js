import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [inputValue, setInputValue] = useState('');
  const handleClick = (value) => {
    setInputValue((prevState) => {
      if (value == '.' && prevState.includes('.')) {
        return prevState;
      } else if (value === '0' && prevState === '0') {
        return '0';
      }
      if (prevState.length >= 15) {
        return prevState;
      }
      return prevState + value;
    });
  }
  const calculateResult = () => {
    try {
      const result = eval(inputValue);
      setInputValue(result.toString());
    } catch (error) {
      setInputValue('Error');
    }
  };
  //clear function 
  const clearInput = () => {
    setInputValue('');
  }
  // delete function 
  const deleteInput = () => {
    setInputValue((prevState) => prevState.slice(0, -1));
  };
  return (

    <div className="calculator">
      <div className='box-container'>
        <form >
          <div className="container">
            <h1>Calculator</h1>
            <input type='text' value={inputValue} readOnly placeholder='0' />
          </div>
          <div className="btn">
            <input type="button" value="De" onClick={deleteInput}></input>
            <input type="button" value="Clear" onClick={clearInput}></input>
            <input type="button" value="." onClick={() => handleClick('.')}></input>
            <input type="button" value="/" onClick={() => handleClick('/')}></input>
          </div>
          <div className="btn">
            <input type="button" value="7" onClick={() => handleClick('7')}></input>
            <input type="button" value="8" onClick={() => handleClick('8')}></input>
            <input type="button" value="9" onClick={() => handleClick('9')}></input>
            <input type="button" value="+" onClick={() => handleClick('+')}></input>
          </div>
          <div className="btn">
            <input type="button" value="4" onClick={() => handleClick('4')}></input>
            <input type="button" value="5" onClick={() => handleClick('5')}></input>
            <input type="button" value="6" onClick={() => handleClick('6')}></input>
            <input type="button" value="*" onClick={() => handleClick('*')}></input>
          </div>
          <div className="btn">
            <input type="button" value="1" onClick={() => handleClick('1')}></input>
            <input type="button" value="2" onClick={() => handleClick('2')}></input>
            <input type="button" value="3" onClick={() => handleClick('3')}></input>
            <input type="button" value="-" onClick={() => handleClick('-')}></input>
          </div>
          <div className="btn">
            <input type="button" value="00" onClick={() => handleClick('00')} ></input>
            <input type="button" value="0" onClick={() => handleClick('0')}></input>
            <input type="button" value="=" className='Eq' onClick={calculateResult}></input>
          </div>
        </form>
      </div>
    </div>


  );
}

export default App;
