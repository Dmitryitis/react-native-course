import React, { useState } from "react";
import { View } from "react-native";
// @ts-ignore
import styled from "styled-components/native";
import BtnAC from "src/components/week4extra1/Buttons/BtnAC";
import BtnOperation from "../components/week4extra1/Buttons/BtnOperation";
import BtnResult from "../components/week4extra1/Buttons/BtnResult";
import BtnOrdinary from "../components/week4extra1/Buttons/BtnOrdinary";
import BtnZero from "../components/week4extra1/Buttons/BtnZero";

const Calculator: React.FC = () => {

  const [text, setText] = useState("0")
  const [prev, setPrev] = useState('')

  const handleClick = (value: string, previous:string) => {
    setText(value)
    setPrev(previous !== '' ? previous : prev)
  }

  return <CalculatorContainer>
    <View>
      <CalculatorText >{prev}</CalculatorText>
      <CalculatorText >{text}</CalculatorText>
    </View>
    <CalculatorRow>
      <BtnAC prev={prev} currentState={text} click={handleClick} value='AC'/>
      <BtnOperation currentState={text} click={handleClick} value='/'/>
    </CalculatorRow>
    <CalculatorRow>
      <BtnOrdinary currentState={text} click={handleClick} value='1'/>
      <BtnOrdinary currentState={text} click={handleClick} value='2'/>
      <BtnOrdinary currentState={text} click={handleClick} value='3'/>
      <BtnOperation currentState={text} click={handleClick} value='*'/>
    </CalculatorRow>
    <CalculatorRow>
      <BtnOrdinary currentState={text} click={handleClick} value='4'/>
      <BtnOrdinary currentState={text} click={handleClick} value='5'/>
      <BtnOrdinary currentState={text} click={handleClick} value='6'/>
      <BtnOperation currentState={text} click={handleClick} value='-'/>
    </CalculatorRow>
    <CalculatorRow>
      <BtnOrdinary currentState={text} click={handleClick} value='7'/>
      <BtnOrdinary currentState={text} click={handleClick} value='8'/>
      <BtnOrdinary currentState={text} click={handleClick} value='9'/>
      <BtnOperation currentState={text} click={handleClick} value='+'/>
    </CalculatorRow>
    <CalculatorRow>
      <BtnZero currentState={text} click={handleClick} value='0'/>
      <BtnResult prev={prev} currentState={text} click={handleClick} value='='/>
    </CalculatorRow>
  </CalculatorContainer>
}

const CalculatorContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: stretch;
  flex-direction: column;
  background-color: #fff;
`

const CalculatorRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const CalculatorText = styled.Text`
  color: #000;
  background-color: #fff;
  font-size: 35px;
  font-weight: bold;
  align-self: flex-end;
  padding: 10px;
  width: 100%;
  text-align: right;
`

export default Calculator