const initialState = {
    Home: "Home",
    About: "About",
    Contact: "Contact"
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "HOME":
        return { ...state, Home: state.Home + action.payload };
      case "ABOUT":
        return { ...state, About: state.About + action.payload };
      case "CONTACT":
        return { ...state, Contact: state.Contact + action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  