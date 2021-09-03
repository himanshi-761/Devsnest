import { combineReducers } from "redux";
import placeReducer from "./placeReducers";
import placeDataReducer from "./placeReducersData";
//import { routerReducer } from "react-router-radius";

const rootReducer = combineReducers({
    place: placeReducer,
    placeData: placeDataReducer,
});
export default rootReducer;