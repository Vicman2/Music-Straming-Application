import { combineReducers } from "redux";
import uiReducer from "./uiReducer";
import userReducer from "./userReducer";
import musicReducer from "./musicReducer";


const reducer = combineReducers({
    user: userReducer, 
    music: musicReducer, 
    ui: uiReducer
})


export default reducer