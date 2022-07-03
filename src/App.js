import React,{useReducer, useState,useEffect} from 'react';
import './App.css';
import Result from './result';

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
    default:
      return state
  }
}

function App() {
  const [inp1,setInp1] = useState('')
  const [inp2,setInp2] = useState('')
  const [operator, setOperator] = useState("SUM");
  const [state,dispatch] = useReducer(reducer,{curr:0}) 

  // const handleInp1 = (e) => {
  //   setInp1(e.target.value)
  // }

  // const handleInp2 = (e) => {
  //   setInp2(e.target.value)
  // }

  // const add = (e) => {
  //   e.preventDefault()
  //   dispatch({type:ACTIONS.ADD})
  //   setInp1('')
  //   setInp2('')
  // }

  // const subtract = (e) => {
  //   e.preventDefault()
  //   dispatch({type:ACTIONS.SUBTRACT})
  //   setInp1('')
  //   setInp2('')
  // }

  // const multiply = (e) => {
  //   e.preventDefault()
  //   dispatch({type:ACTIONS.MULTIPLY})
  //   setInp1('')
  //   setInp2('')
  // }

  // const divide = (e) => {
  //   e.preventDefault()
  //   dispatch({type:ACTIONS.DIVIDE})
  //   setInp1('')
  //   setInp2('')
  // }
  useEffect(() => {
    dispatch({ operator, inp1, inp2 });
  }, [inp1, inp2, operator]);
  console.log(state)
  return (
    <>
      <form className='form-container'>
        <input className='inp'></input>
        <button className="operator">+</button>
        <button className="operator" >-</button>
        <button className="operator" >*</button>
        <button className="operator" >/</button>
        <input className='inp'></input>
      </form>
      <Result dispatch={dispatch} />
    </>
  );
}

export default App;