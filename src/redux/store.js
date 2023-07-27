
import { rootReducers } from "./rootReducer";

import { createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

let store = createStore(rootReducers, composeWithDevTools());



export {store};