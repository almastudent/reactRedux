import './App.css';
import React from 'react'
 import { Home,About,Contact } from './action/action';
import { useSelector,useDispatch } from 'react-redux';
 

function App() {


  const HOME =useSelector((state)=>state.reducer.Home)
  const ABOUT =useSelector((state)=>state.reducer.About)
  const CONTACT =useSelector((state)=>state.reducer.Contact)
  const dispatch=useDispatch()
 
  return (
    <>
        <div className='flex justify-around   p-5 bg-blue-600'>
          <div className=''>
            <input className=' rounded-md border border-red-400 w-full h-10' type="text" />
            <button className='w-full h-fit rounded-md bg-green-500 py-2' type='submit'>Submit</button>
          </div>
          <div className='flex m-4 '>
          <h1 onClick={()=>dispatch(Home(" For Bablu"))}  className='p-4 cursor-pointer' >{HOME}</h1>
         <h1 onClick={()=>dispatch(About(" Bablu"))} className='p-4 cursor-pointer'>{ABOUT}</h1>
         <h1 onClick={()=>dispatch(Contact(" Detail"))} className='p-4 cursor-pointer' >{CONTACT}</h1>
         <h1  className='p-4 cursor-pointer'> SOURCE </h1>
          </div>
       
        </div>
       
    </>
  )
}

export default App
