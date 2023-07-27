import { bgReducer, BG_KEY} from "./bgRedux/bgReducer";

import {combineReducers} from 'redux';

let rootReducers = combineReducers({
     bgStore: bgReducer,  
})





export {rootReducers}