import React, { useState } from "react";
// @ts-ignore
import styled from "styled-components/native";
import CounterBtn from "w_homework/src/components/week4/CounterBtn";
import { Text } from "react-native";

type Signs = 'plus' | 'minus'

const CounterFontSize: React.FC = () => {
  const [size, setSize] = useState<number>(10)

  const onClick = (action: Signs) => {
    if (action === 'minus' && size !== 6) {
      setSize(size - 1)
    } else {
      setSize(size + 1)
    }
  }

  return <CounterFontSizeContainer>
    <CounterSimpleTextView>
      <Text style={{
        marginBottom: 10,
        fontSize: size,
      }}>Text primer</Text>
    </CounterSimpleTextView>
    <CounterFontSizeAction>
      <CounterBtn disabled={size === 6} action={'minus'} onClick={onClick} />
      <CounterSimpleText>{size}</CounterSimpleText>
      <CounterBtn action={'plus'} onClick={onClick} />
    </CounterFontSizeAction>
  </CounterFontSizeContainer>
}

const CounterFontSizeContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const CounterFontSizeAction = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const CounterSimpleTextView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 60px;
`

const CounterSimpleText = styled.Text`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px;
  color: #7C37FA;
`

export default CounterFontSize