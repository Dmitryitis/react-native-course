import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import { PlusIcon as PlusIconSolid, MinusIcon as MinusIconSolid } from "react-native-heroicons/solid";

type Signs = 'plus' | 'minus'

interface Props {
  action: Signs,
  disabled?: boolean,
  onClick: (type: Signs) => void,
}

const CounterBtn: React.FC<Props> = ({action, onClick, disabled=false}) => {

  return <ButtonTouchable disabled={disabled} activeOpacity={0.7} onPress={() => onClick(action)}>
    { action === 'plus' ? <PlusIconSolid size={20} fill={'#7C37FA'} color={'#7C37FA'} /> : <MinusIconSolid size={20} fill={'#7C37FA'} color={'#7C37FA'} />}
  </ButtonTouchable>
}

const ButtonTouchable = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-color: #7C37FA;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default CounterBtn