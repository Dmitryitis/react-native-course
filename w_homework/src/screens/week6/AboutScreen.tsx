import React from "react";
import { FC } from "react";
import { Button, View, Text } from "react-native";
import { NavigationProp, useNavigation, StackActions  } from "@react-navigation/native";
import { ParamLists } from "../../components/week6/types/ParamLists";


const AboutScreen: FC = () => {
  const navigation = useNavigation<NavigationProp<ParamLists, 'AboutNavigation'>>();

  return (
    <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center',}}>
      <Text style={{textAlign: 'center', fontSize: 25, marginBottom: 10,}}>About App</Text>

      <View style={{ margin: 5,}}>
        <Button
          title="Home"
          onPress={() => { navigation.dispatch(StackActions.popToTop()); }} />
      </View>
    </View>
  )
}

export default AboutScreen