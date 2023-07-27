import {
  PINK_BG,
  BLACK_BG,
  BLUE_BG,
  GREEN_BG,
  YELLOW_BG,
  RED_BG,

} from "./bg.actionTypes";

export const BG_KEY = "bgStore";


let initialState = {
  color: "#ffffff",
};

let bgReducer = (state = initialState, action) => {
  let { type, payload } = action;
  if (type === PINK_BG) {
    return {
      color: "#d81b60",
    };
  } else if (type === BLACK_BG) {
    return {
      color: "#343a40",
    };
  } else if (type === BLUE_BG) {
    return {
      color: "#1a73e8",
    };
  } else if (type === GREEN_BG) {
    return {
      color: "#4caf50",
    };
  } else if (type === YELLOW_BG) {
    return {
      color: "#fb8c00",
    };
  } else if (type === RED_BG) {
    return {
      color: "#f44335",
    };
  } else {
    return state;
  }
};



export { bgReducer };
