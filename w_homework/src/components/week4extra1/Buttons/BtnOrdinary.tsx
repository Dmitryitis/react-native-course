import React from "react";
import { BtnBaseType } from "../types";
import BtnBase from "./BtnBase";

const BtnOrdinary: React.FC<BtnBaseType> = ({currentState, value, click}) => {
  const pressHandler = () => {
    if(currentState !== '0') {
      click(currentState + value, '');
    } else {
      click(value, '');
    }
  }

  return <BtnBase value={value} pressHandler={pressHandler} />
}

export default BtnOrdinary