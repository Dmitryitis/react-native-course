import React from "react";
import { FC } from "react";
// @ts-ignore
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const HomeLayout: FC = () => {
  const navigation = useNavigation()

  const onPress = (name: String) => {

    // @ts-ignore
    navigation.navigate(name)
  }

  React.useEffect(() => {
    navigation.setOptions({
      title: "FlexLayouts"
    })
  },[])

  return <ContainerView>
    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("Articles")}>
      <ButtonText>Articles</ButtonText>
    </ButtonTouchable>

    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("Users")}>
      <ButtonText>Users</ButtonText>
    </ButtonTouchable>

    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("User")}>
      <ButtonText>User</ButtonText>
    </ButtonTouchable>

    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("UsersAvatar")}>
      <ButtonText>UsersAvatars</ButtonText>
    </ButtonTouchable>

    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("UserCall")}>
      <ButtonText>UserCall</ButtonText>
    </ButtonTouchable>

    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("Success")}>
      <ButtonText>Success Screen</ButtonText>
    </ButtonTouchable>

    <ButtonTouchable activeOpacity={0.7} onPress={() => onPress("ArticleItem")}>
      <ButtonText>ArticleItem</ButtonText>
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

export default HomeLayout