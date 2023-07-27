import {
  PINK_BG,
  BLACK_BG,
  BLUE_BG,
  GREEN_BG,
  YELLOW_BG,
  RED_BG,

} from "./bg.actionTypes";

let pinkBg = () => {
  return {
    type: PINK_BG,
    payload: "change background",
  };
};

let blackBg = () => {
  return {
    type: BLACK_BG,
    payload: "change background",
  };
};

let blueBg = () => {
  return {
    type: BLUE_BG,
    payload: "change background",
  };
};

let greenBg = () => {
  return {
    type: GREEN_BG,
    payload: "reset background",
  };
};

let yellowBg = () => {
  return {
    type: YELLOW_BG,
    payload: "change background",
  };
};

let redBg = () => {
  return {
    type: RED_BG,
    payload: "change background",
  };
};



export { pinkBg, blackBg, blueBg, greenBg, yellowBg, redBg};
