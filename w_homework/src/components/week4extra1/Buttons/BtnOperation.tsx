import React from "react";
import BtnBase from "./BtnBase";
import { BtnBaseType } from "../types";

const BtnOperation: React.FC<BtnBaseType> = ({value,click,currentState}) => {

  const pressHandler = () => {
    let last = currentState.toString().charAt(currentState.length - 1);
    if('+-*/'.includes(last)) {
      click(currentState, '');
    } else {
      click(currentState + value, '');
    }
  }

  return <BtnBase orange value={value} pressHandler={pressHandler} />
}

export default BtnOperation