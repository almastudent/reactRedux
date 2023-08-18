import React from 'react'


import { useSelector,useDispatch } from 'react-redux';
import { backGround } from '../action/action';

 

const Navbar = () => {
    const {number,backgroundColor}=useSelector((state)=>state.manipulateTheNumber)
 const dispatch =useDispatch()
  return (
    <div>
      <div className="card"  style={{"width":"18rem", "background-color":   `${backgroundColor}`}}>
  <div className="card-body">
    <h5 className="card-title">Card Price:{number}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle {backgroundColor}</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
    <button type="button" class="btn btn-primary" onClick={()=>dispatch(backGround(backgroundColor))}> Enable {backgroundColor=="yellow"?"white":"yellow"} mode</button>
  </div>
</div>
    </div>
  )
}

export default Navbar
