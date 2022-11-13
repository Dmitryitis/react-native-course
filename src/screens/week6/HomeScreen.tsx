import { FC } from "react";
import { Button, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { ParamLists } from "../../components/week6/types/ParamLists";


const HomeScreen: FC = () => {
  const navigation = useNavigation<NavigationProp<ParamLists, 'HomeNavigation'>>();

  return (
    <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ textAlign: 'center', fontSize: 22, marginBottom: 50,}}>Home</Text>

      <View style={{ margin: 5,}}>
        <Button
          title="User List"
          onPress={() => { navigation.navigate('UserListNavigation') }} />
      </View>


      <View style={{ margin: 5,}}>
        <Button
          title="About App"
          onPress={() => { navigation.navigate('AboutNavigation') }} />
      </View>
    </View>
  )
}

export default HomeScreen