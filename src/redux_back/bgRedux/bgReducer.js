import {
BG_CHANGE
} from "./bg.actionTypes";

export const MY_KEY = "bgStore";


let initialState = {
  color: "#ffffff",
};

let bgReducer = (state = initialState, action) => {
  let { type, payload } = action;
  if (type === BG_CHANGE) {
    return {
      color: "#343a40",
    };
  }else{
    return state;
  }
};



export { bgReducer };
