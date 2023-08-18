   const initialState={
    number:0,
    backgroundColor:"light"
   }


  export const manipulateTheNumber=(state=initialState,action)=>{
    switch (action.type) {
        case "INCREMENT":
          return { ...state, number: state.number + 1 };
        case "DECREMENT":
          return { ...state, number: state.number - 1 };
        case "CHANGE_COLOR":
          return { ...state, backgroundColor: action.payload };
        default:
          return state;
      }
}

