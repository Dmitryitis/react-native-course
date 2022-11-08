import React, { FC, useState } from "react";
import { Alert, FlatList, RefreshControl, View } from "react-native";
import { User } from "../../components/flexLayouts/types";
import { AxiosResponse } from "axios";
import Api from "../../api";
import Loading from "../../components/flexLayouts/Loading";
import UserItem from "../../components/flexLayouts/user/UserItem";

const Users:FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [items, setItems] = React.useState<User[] | []>([]);

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
    <FlatList
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchUsers} />}
      data={items}
      renderItem={({item}) => <UserItem user={item} />} />
  </View>
}

export default Users