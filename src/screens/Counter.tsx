import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import CounterSimple from "src/components/week4/mode/CounterSimple";
import CounterFontSize from "src/components/week4/mode/CounterFontSize";


const Counter: React.FC = () => {
  return <CounterContainerView>
    <CounterSimple />
    <CounterLineView />
    <CounterFontSize />
  </CounterContainerView>
}


const CounterContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 2px;
  background-color: #F5F6FA;
`

const CounterLineView = styled.View`
  margin-bottom: 20px;
  margin-top: 20px;
  height: 3px;
  width: 100%;
  background-color: #7C37FA;
`

export default Counter