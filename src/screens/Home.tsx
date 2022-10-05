import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
// @ts-ignore
import styled from "styled-components/native";

const Home: FC = () => {
  const navigation = useNavigation()

  const onPress = () => {

    // @ts-ignore
    navigation.navigate("Counter")
  }

  React.useEffect(() => {
    navigation.setOptions({
      title: "Домашняя"
    })
  },[])

  return <ContainerView>
    <ButtonTouchable activeOpacity={0.7} onPress={onPress}>
      <ButtonText>Counter (week4)</ButtonText>
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
  background-color: #7C37FA;
  border-radius: 10px;
  color: #FFFFFF;
`

const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
`

export default Home