import {createStore} from "redux";
import { combineReducers } from "redux";
import reducer1 from "./reducer"
import reducer2 from "./secondreducer"


const rootReducer=combineReducers({questions:reducer1,state:reducer2})
const store= createStore(rootReducer);


export default store;