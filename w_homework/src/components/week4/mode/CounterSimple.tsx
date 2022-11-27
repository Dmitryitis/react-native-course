import React, { useState } from "react";
// @ts-ignore
import styled from "styled-components/native";
import CounterBtn from "w_homework/src/components/week4/CounterBtn";

type Signs = 'plus' | 'minus'

const CounterSimple: React.FC = () => {
  const [counter, setCounter] = useState<number>(0)

  const onClick = (action: Signs) => {
    if (action === 'minus' && counter !== 0) {
      setCounter(counter - 1)
    } else {
      setCounter(counter + 1)
    }
  }
  return <CounterSimpleContainer>
    <CounterBtn disabled={counter === 0} action={'minus'} onClick={onClick} />
    <CounterSimpleText>{counter}</CounterSimpleText>
    <CounterBtn action={'plus'} onClick={onClick} />
  </CounterSimpleContainer>
}

const CounterSimpleContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const CounterSimpleText = styled.Text`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px;
  color: #7C37FA;
`

export default CounterSimple