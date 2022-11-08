import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
// @ts-ignore
import styled from "styled-components/native";

const Home: FC = () => {
  const navigation = useNavigation()

  const onPress = (name: String) => {

    // @ts-ignore
    navigation.navigate(name)
  }

  React.useEffect(() => {
    navigation.setOptions({
      title: "Домашняя"
    })
  },[])

  return <ContainerView>
    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("Counter")}>
      <ButtonText>Counter (week4)</ButtonText>
    </ButtonTouchable>

    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("Calculator")}>
      <ButtonText>Калькулятор (week4extra1)</ButtonText>
    </ButtonTouchable>

    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("HomeLayout")}>
      <ButtonText>FlexLayouts</ButtonText>
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

export default Home