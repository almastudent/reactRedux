export const Home=(userData)=>{
    return{
    type:"HOME",    
    payload:userData
    }
     
 }
 

 export const About=(userData)=>{
    return{
    type:"ABOUT",    
      payload:userData
    }
     
 }
 
 export const Contact=(userData)=>{
    return{
    type:"CONTACT",    
      payload:userData
    }
     
 }


 export const addData=(userData)=>{
  return{
    type:"ADD_DATA",
    payload:userData
  }
 }

