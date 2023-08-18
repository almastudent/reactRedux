import { combineReducers } from "redux";
import { manipulateTheNumber } from "./reducer";


 export const rootReducer=combineReducers({
    manipulateTheNumber:manipulateTheNumber
})




