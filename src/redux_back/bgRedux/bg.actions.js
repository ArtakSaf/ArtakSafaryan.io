import {
  BG_CHANGE,
} from "./bg.actionTypes";


let changeBg = () => {
  return {
    type: BG_CHANGE,
    payload: "change background",
  };
};



export {changeBg};
