import React, { FC } from "react";
import { Text, View } from "react-native";
// @ts-ignore
import styled from "styled-components/native";
import { PhoneIcon as PhoneIconSolid } from "react-native-heroicons/solid";
import UserAvatar from "../flexLayouts/user/UserAvatar";
import CheckSvg from "../flexLayouts/user/CheckSvg";
import { User } from "../flexLayouts/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamLists } from "./types/ParamLists";

interface Props {
  user: User,
  last?: boolean
  navigation:  NativeStackNavigationProp<ParamLists, 'UserListNavigation'>;
}

const UserItemNavigation: FC<Props> = ({user, navigation,last= false, }) => {

  const dateFormatter = (date: string) => {
    const newDate = new Date(date)

    let hour = new Intl.DateTimeFormat('en', { hour: 'numeric', minute: 'numeric' }).format(newDate);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(newDate);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);

    return `${da} ${mo} ${hour}`
  }

  return <UserTouchable onPress={() => { navigation.navigate('UserProfileNavigation', { id: user.id })}}>
    <View style={{flex:1,flexDirection: 'row'}}>
      <UserAvatar avatar={user.avatar} />
      <View style={{flex: 1,flexDirection: 'column'}}>
        <Text style={{color: '#000', fontSize: 17, marginBottom: '5px'}}>{user.name}</Text>
        <View style={{display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
          <CheckSvg />
          <View style={{marginLeft: -18}} />
          <CheckSvg />
          <Text style={{marginLeft: '4px', fontSize: 12, color: '#757575'}}>{dateFormatter(user.lastActive)}</Text>
        </View>
      </View>
    </View>

    <View >
      <PhoneIconSolid size={18} color={'#8aef74'} />
    </View>
  </UserTouchable>
}

const UserTouchable = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  background: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #818181;
  border-bottom-style: solid ;
`

export default UserItemNavigation