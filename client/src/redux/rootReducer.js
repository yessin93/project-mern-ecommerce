import reducer from "./reducer";
import {combineReducers} from "redux";
import productReducer from "./productReducer";


const rootReducer = combineReducers({reducer, productReducer});


export default rootReducer