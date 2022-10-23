import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
// @ts-ignore
import styled from "styled-components/native";

const Components: FC = () => {
  const navigation = useNavigation()

  const onPress = (name: String) => {

    // @ts-ignore
    navigation.navigate(name)
  }

  return <ContainerView>
    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("ButtonComponent")}>
      <ButtonText>Button (week5)</ButtonText>
    </ButtonTouchable>

    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("TextInput")}>
      <ButtonText>TextInput (week5)</ButtonText>
    </ButtonTouchable>

    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("TextInputForm")}>
      <ButtonText>TextInputForm (week5)</ButtonText>
    </ButtonTouchable>

    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("BoxForm")}>
      <ButtonText>BoxForm (week5)</ButtonText>
    </ButtonTouchable>
  </ContainerView>
}

const ContainerView = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`

const ButtonTouchable = styled.TouchableOpacity`
  padding: 13px 20px;
  max-width: 360px;
  width: 100%;
  background-color: #7C37FA;
  border-radius: 10px;
  color: #FFFFFF;
  margin-bottom: 15px;
`

const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
  text-align: center;
`

export default Components