import React,{useReducer,useEffect, useState} from 'react';
import './App.css';

const initialarg = {curr:0}

const reducer = (state,action) => {
  const inp1 = parseInt(action.inp1,10)
  const inp2 = parseInt(action.inp2,10)
  if (isNaN(inp1) || isNaN(inp2)) {
    return state
  }
  switch(action.operator) {
    case 'add':
      return {curr: inp1+inp2 }
    case 'subtract':
      return {curr: inp1-inp2}
    case 'multiply':
      return {curr: inp1*inp2}
    case 'divide':
      return {curr:inp1/inp2}
    case 'exponential':
      return {curr: inp1**inp2}
    default:
      return state
  }
}

function App() {
  const [inp1,setInp1] = useState('')
  const [inp2,setInp2] = useState('')
  const [operator, setOperator] = useState('add');
  const [state,dispatch] = useReducer(reducer,initialarg) 

  useEffect(() => {
    dispatch({ operator, inp1, inp2 });
  }, [inp1, inp2, operator]);
  console.log(state.curr)
  return (
    <>
      <h1>React Calculator</h1>
      <form className='form-container' onSubmit={(e)=> e.preventDefault()}>
        <input className='inp' value={inp1} onChange={(e) => setInp1(e.target.value)} type="number"></input>
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value='add'>+</option>
          <option value='subtract' >-</option>
          <option value='multiply' >*</option>
          <option value='divide' >/</option>
          <option value='exponential'>^</option>
        </select>
        <input className='inp' value={inp2} onChange={(e) => setInp2(e.target.value)} type="number"></input>
      </form>
      <div>
      {state.curr}
      </div>
    </>
  );
}

export default App;