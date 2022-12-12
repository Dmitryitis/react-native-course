import React, { FC } from "react";
import { Pressable, Text, View } from "react-native";
import {
  MinusCircleIcon as MinusCircleIconOutline,
  PlusCircleIcon as PlusCircleIconOutline
} from "react-native-heroicons/outline";
import CounterStore from "../../store/CounterStore";
import { observer } from "mobx-react-lite";


const CounterMobxScreen: FC = observer(() => {
 return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
   <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
   <Pressable onPress={() => CounterStore.decrement()}>
     <MinusCircleIconOutline size={30} color={'#000'} />
   </Pressable>

   <Text style={{marginLeft: 10, marginRight: 10, fontSize: 14}}>{CounterStore.count}</Text>

   <Pressable onPress={() => CounterStore.increment()}>
     <PlusCircleIconOutline size={30} color={'#000'} />
   </Pressable>
   </View>

   <Pressable onPress={() => CounterStore.reset()}>
     <Text style={{color: '#438df1', fontSize: 15, textAlign: 'center', marginTop: 15}}>Reset</Text>
   </Pressable>
 </View>
})

export default CounterMobxScreen