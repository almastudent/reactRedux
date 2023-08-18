

export const inCrement=()=>{
    return{
        type:"INCREMENT"
    }
}


export const deCrement=()=>{
    return{
        type:"DECREMENT"
    }
}



export const backGround=(currentColor)=>{
    return{
        type:"CHANGE_COLOR",
        payload:currentColor === 'yellow' ? 'white' : 'yellow'
    }
}