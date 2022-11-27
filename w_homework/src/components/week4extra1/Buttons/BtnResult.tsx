import React from "react";
import { BtnPrevType } from "../types";
import BtnBase from "./BtnBase";

const BtnResult: React.FC<BtnPrevType> = ({currentState, value, click, prev}) => {

  const pressHandler = () => {
    let operations = ['+','-','/','*'];

    operations.forEach(operation => {
      currentState.split(operation).forEach((elem: string, index: number) => {
        if(index === 1 && elem !== '') {
          let result = (new Function(`return ${currentState}`))();
          click(result.toString().slice(0,15), `${currentState}`);
        }
      });
    });
  }

  return <BtnBase orange value={value} pressHandler={pressHandler} />
}

export default BtnResult