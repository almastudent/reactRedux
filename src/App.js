import './App.css';
import React from 'react'
import { inCrement,deCrement } from './action/action';
import { useSelector,useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
function App() {
 const {number}=useSelector((state)=>state.manipulateTheNumber)
 const dispatch =useDispatch()
 
  return (
    <> 
    <div className="container-fluid my-4">
      <h1>INCREMENT/DECREMENT IN REDUX</h1>
          <h4>Using react and redux</h4>
         <div className="quantity mb-3">
         <button type="button" className="btn btn-primary" onClick={()=>dispatch(deCrement())}>-</button>
          <input type="text" value={number} />
         <button type="button" className="btn btn-primary" onClick={()=>dispatch(inCrement())}>+</button>
         </div>



    </div>
    
   <Navbar/>
    </>
  )
}

export default App
