import React, { useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import type { RouteProp } from "@react-navigation/native";
import { useNavigation, useRoute } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamLists } from "../../components/week6/types/ParamLists";
import { User as UserType } from "../../components/flexLayouts/types";
import { AxiosResponse } from "axios";
import Api from "../../api";
import Loading from "../../components/flexLayouts/Loading";


type NavigationProp = NativeStackNavigationProp<ParamLists, 'UserProfileNavigation'>;
type UserProfileRouteProp = RouteProp<ParamLists, 'UserProfileNavigation'>;

function UserProfileScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [item, setItem] = React.useState<UserType | null>(null);

  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<UserProfileRouteProp>();
  const id = route.params.id;

  const fetchUser = async () => {
    try {
      setIsLoading(true)
      const {data}: AxiosResponse<UserType>  = await Api.getUser(parseInt(id, 10))
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

  return (
    <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center',}}>
      <Text style={{textAlign: 'center', fontSize: 30, marginBottom: 10,}}>User Profile</Text>
      <Text style={{textAlign: 'center', fontSize: 20, marginBottom: 10,}}>Name: {item?.name}</Text>

      <View style={{ margin: 5,}}>
        <Button
          title="Home"
          onPress={() => { navigation.popToTop() }} />
      </View>

      <View style={{ margin: 5,}}>
        <Button
          title="User List"
          onPress={() => { navigation.goBack() }} />
      </View>

      <View style={{ margin: 5,}}>
        <Button
          title="About App"
          onPress={() => { navigation.navigate('AboutNavigation') }} />
      </View>
    </View>
  )
}

export default UserProfileScreen;