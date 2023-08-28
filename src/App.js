import './App.css';
import React, { useState } from 'react'
 import { Home,About,Contact, addData } from './action/action';
import { useSelector,useDispatch } from 'react-redux';
// import reducer from './reducer/CreatReducer';
import Home1 from './components/Home1';
 

function App() {


  const HOME =useSelector((state)=>state.reducer.Home)
  const ABOUT =useSelector((state)=>state.reducer.About)
  const CONTACT =useSelector((state)=>state.reducer.Contact)
  const extracted_data=useSelector((state)=>state.reducer.input)
    const wish_data=extracted_data

  const dispatch=useDispatch()

  const [data,setData]=useState("")
   const handlesubmit=()=>{
    dispatch(addData(data))
   }
 
  return (

    <>
        <div className='flex justify-around   p-5 bg-blue-600'>
          <div className=''>
            <input onChange={(e)=>setData(e.target.value)} className=' rounded-md border border-red-400 w-full h-10' type="text" />
            <button onClick={handlesubmit} className='w-full h-fit rounded-md bg-green-500 py-2' type='submit'>Submit</button>
          </div>
          <div className='text-2xl text-center text-white'>
          {extracted_data} 
          </div>
          <div className='flex m-4 '>
          <h1 onClick={()=>dispatch(Home(" For Bablu"))}  className='p-4 cursor-pointer' >{HOME}</h1>
         <h1 onClick={()=>dispatch(About(" Bablu"))} className='p-4 cursor-pointer'>{ABOUT}</h1>
         <h1 onClick={()=>dispatch(Contact(" Detail"))} className='p-4 cursor-pointer' >{CONTACT}</h1>
         <h1  className='p-4 cursor-pointer'> SOURCE </h1>
          </div>
       
        </div>
       <Home1 wish_data={wish_data}/>
    </>
  )
}

export default App
