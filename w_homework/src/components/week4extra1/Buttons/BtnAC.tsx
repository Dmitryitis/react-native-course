import React from "react";
import BtnBase from "./BtnBase";
import { BtnPrevType } from "../types";

const BtnAC: React.FC<BtnPrevType> = ({value,click}) => {

  const pressHandler = () => {
    if (value === 'AC') {
      click('0', ' ');
    }
  }

  return <BtnBase width3x value={value} pressHandler={pressHandler} />
}

export default BtnAC