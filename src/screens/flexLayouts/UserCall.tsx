import React, { useState } from "react";
import { FC } from "react";
import { Alert, Text, View } from "react-native";
import { VideoCameraIcon as VideoCameraIconSolid, SpeakerWaveIcon as SpeakerWaveIconSolid, MicrophoneIcon as MicrophoneIconSolid, PhoneIcon as PhoneIconSolid  } from "react-native-heroicons/solid";
import { User as UserType } from "src/components/flexLayouts/types";
import { AxiosResponse } from "axios";
import Api from "src/api";
import Loading from "src/components/flexLayouts/Loading";
// @ts-ignore
import styled from "styled-components/native";

const UserCall: FC = () => {
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

 return <View style={{flex: 1,flexDirection: 'column', backgroundColor: '#57ad3a'}}>
   <View style={{flex: 1/7, justifyContent: 'space-between'}}>
     <View style={{flexDirection: 'row', alignItems: 'center'}}>
       <VideoCameraIconSolid size={15} color={'#9efc8a'} />
       <Text style={{color: '#fff', fontSize: 18, marginLeft: 10}}>Whats Call</Text>
     </View>

     <View  style={{flexDirection: 'column', marginBottom: 10}}>
       <Text style={{marginBottom: 10, color: '#fff', fontSize: 25}}>{item?.name}</Text>
       <Text style={{color: '#fff', fontSize: 13}}>CALLING</Text>
     </View>
   </View>

   <View style={{flex: 3/7}}>
     <ArticlesItemImage source={{uri: item?.avatar}} />
   </View>
   <View style={{flex: 3/7, alignItems: 'center', justifyContent:'center'}}>
     <View style={{flex: 1, alignItems: 'center', justifyContent:'space-between', flexDirection: 'row', width: '250px'}}>
       <CallButton >
        <SpeakerWaveIconSolid size={15} />
       </CallButton>
       <CallButtonBig >
         <PhoneIconSolid size={15} />
       </CallButtonBig>
       <CallButton >
         <MicrophoneIconSolid size={15} />
       </CallButton>
     </View>
   </View>
 </View>
}

const ArticlesItemImage = styled.Image`
  width:  100%;
  height: 100%;
  object-fit: cover;
`

const CallButton = styled.View`
  width:  40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

const CallButtonBig = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ff5e5e;
  align-items: center;
  justify-content: center;
`

export default UserCall