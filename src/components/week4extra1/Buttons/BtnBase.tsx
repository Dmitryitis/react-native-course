import React from "react";
// @ts-ignore
import styled from "styled-components/native";


interface Props {
  value: string,
  width2X?: boolean,
  width3x?: boolean,
  orange?: boolean,
  pressHandler: () => void
}

const BtnBase: React.FC<Props> = ({value, pressHandler, width2X=false, width3x = false, orange = false}) => {
  return <BtnBaseContainer activeOpacity={0.6} style={{
    width: width2X ? 95 * 2 : width3x ? 95 * 3 : 95,
    backgroundColor: orange ? '#f39957' : '#e5e5e5'
  }} onPress={pressHandler}>
    <BtnBaseText>
      {value}
    </BtnBaseText>
  </BtnBaseContainer>
}

const BtnBaseContainer = styled.TouchableOpacity`
  width: 95px;
  height: 95px;
  padding-top: 30px;
  background-color: #d9d9d9;
`

const BtnBaseText = styled.Text`
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: #141214;
`

export default BtnBase