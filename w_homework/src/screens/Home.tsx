import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
// @ts-ignore
import styled from "styled-components/native";
import TodoMobxScreen from "./week9b/TodoMobxScreen";
import WeatherStore from "../store/WeatherStore";

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
  },[WeatherStore.selectedCity.name])

  return <ContainerView>
    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("CounterMobxScreen")}>
      <ButtonText>CounterMobxScreen (week9b)</ButtonText>
    </ButtonTouchable>

    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("TodoMobxScreen")}>
      <ButtonText>TodoMobxScreen (week9c)</ButtonText>
    </ButtonTouchable>

    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("CitiesScreen")}>
      <ButtonText>Weather (weather)</ButtonText>
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