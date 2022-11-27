import React, { useState } from "react";
import { FC } from "react";
import { Alert, Text, View } from "react-native";
import { User as UserType } from "w_homework/src/components/flexLayouts/types";
// @ts-ignore
import styled from "styled-components/native";
import { AxiosResponse } from "axios";
import Api from "w_homework/src/api";
import Loading from "w_homework/src/components/flexLayouts/Loading";


const User: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [item, setItem] = React.useState<UserType | null>(null);

  const fetchUser = async () => {
    try {
      setIsLoading(true)
      const {data}: AxiosResponse<UserType>  = await Api.getUser(1)
      setItem(data)
    } catch (e) {
      Alert.alert('Ошибка', 'Не удалось получить пользователей')
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    fetchUser()
  }, [])

  if (isLoading) return <Loading />

  return <View style={{flex: 1, flexDirection: 'column'}}>
    <View style={{flex: 2/5, backgroundColor: '#73d5f3', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <ArticlesItemImage source={{uri: item?.avatar}} />
      <Text style={{marginTop: 10,color: '#fff', fontSize: 18}}>{item?.name}</Text>
    </View>
  </View>
}

const ArticlesItemImage = styled.Image`
  width:  130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: white;
`


export default User