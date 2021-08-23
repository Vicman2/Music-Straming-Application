import { combineReducers } from "redux";
import uiReducer from "./reducers/uiReducer";
import userReducer from "./reducers/userReducer";
import musicReducer from "./reducers/musicReducer";


const reducer = combineReducers({
    user: userReducer, 
    music: musicReducer, 
    ui: uiReducer
})