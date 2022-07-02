import React,{useReducer, useState} from 'react';
import './App.css';

const ACTIONS = {
  ADD:'add',
  SUBTRACT:'subtract',
  MULTIPLY:'multiply',
  DIVIDE:'divide'
}

const reducer = (state,action) => {
  const inp1 = action.inp1
  const inp2 = action.inp2
  switch(action.type) {
    case ACTIONS.ADD:
      return {curr: inp1+inp2 }
    case ACTIONS.SUBTRACT:
      return {curr: inp1-inp2}
    case ACTIONS.MULTIPLY:
      return {curr: inp1*inp2}
    case ACTIONS.DIVIDE:
      return {curr:inp1/inp2}
  }
}

function App() {
  const [inp1,setInp1] = useState('')
  const [inp2,setInp2] = useState('')
  const [state,dispatch] = useReducer(reducer,{curr:0}) 

  const handleInp1 = (e) => {
    setInp1(e.target.value)
  }

  const handleInp2 = (e) => {
    setInp2(e.target.value)
  }

  const add = () => {
    dispatch({type:ACTIONS.ADD})
  }

  const subtract = () => {
    dispatch({type:ACTIONS.SUBTRACT})
  }

  return (
    <>
      <form className='form-container'>
        <input className='inp' onChange={handleInp1}></input>
        <button className="operator">+</button>
        <button className="operator">-</button>
        <button className="operator">*</button>
        <button className="operator">/</button>
        <input className='inp' onChange={handleInp2}></input>
      </form>
    </>
  );
}

export default App;