import React, { FC, useState } from "react";
import { Alert, Button, FlatList, RefreshControl, View } from "react-native";
import { User } from "../../components/flexLayouts/types";
import { AxiosResponse } from "axios";
import Api from "../../api";
import Loading from "../../components/flexLayouts/Loading";
import { StackActions, useNavigation } from "@react-navigation/native";
import UserItemNavigation from "../../components/week6/UserItemNavigation";

const UserListScreen:FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [items, setItems] = React.useState<User[] | []>([]);
  const navigation = useNavigation<any>();

  const fetchUsers = async () => {
    try {
      setIsLoading(true)
      const {data}: AxiosResponse<User[]>  = await Api.getAllUsers()
      setItems(data)
    } catch (e) {
      Alert.alert('Ошибка', 'Не удалось получить пользователей')
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    fetchUsers()
  }, [])

  if (isLoading) return <Loading />

  return <View>

    <View style={{ margin: 5,}}>
      <Button
        title="Home"
        onPress={() => { navigation.dispatch(StackActions.popToTop()); }} />
    </View>

    <View style={{ margin: 5}}>
      <Button
        title="About App"
        onPress={() => { navigation.navigate('AboutNavigation') }} />
    </View>

    <FlatList
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchUsers} />}
      data={items}
      renderItem={({item}) => <UserItemNavigation user={item} navigation={navigation} />} />
  </View>
}

export default UserListScreen