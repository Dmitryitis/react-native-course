import React from "react";
import { BtnBaseType } from "../types";
import BtnBase from "./BtnBase";

const BtnZero: React.FC<BtnBaseType> = ({currentState, value, click}) => {
  const pressHandler = () => {
    if(currentState === '0') {
      click('0', '');
    } else {
      click(currentState + '0', '');
    }
  }

  return <BtnBase width3x value={value} pressHandler={pressHandler} />
}

export default BtnZero