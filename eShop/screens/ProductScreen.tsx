import React, { FC } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { observer } from "mobx-react-lite";
import CartStore from "../store/CartStore";

// @ts-ignore
const ProductScreen: FC = observer(({route}) => {

  const {item} = route.params

  return (<ScrollView style={{
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    paddingBottom: 32
  }}>
    <View>
      <Image
        style={{
          width: "100%",
          aspectRatio: 1,
          height: 'auto',
        }}
        source={{uri: item.avatar}}
      />
      <View style={{marginHorizontal: 16, marginTop: 10}}>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 32, fontWeight: "600"}}>{item.title}</Text>
          <Text style={{fontSize: 24, fontWeight: "600"}}>{item.price}$</Text>
        </View>
        <Text style={{
          fontSize: 18,
          fontWeight: "500",
          marginTop: 8,
          color: "gray",
          padding: 10,
        }}>{item.description}</Text>
      </View>
    </View>

    <View style={{
      flexDirection: "row",
      alignItems: "center",
      marginTop: 16,
      marginHorizontal: 16,
      marginBottom: 16
    }}>
      <Pressable
        onPress={() => {
          if (CartStore.cart.has(item.id)) {
            CartStore.removeFromCart(item.id)
          } else {
            CartStore.addToCart(item.id)
          }
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 16,
          backgroundColor: CartStore.cart.has(item.id) ? '#000000' : 'rgba(204,204,204,0.43)',
          width: "90%"
        }}>
        <Text style={{
          fontSize: 18,
          fontWeight: "500",
          color: CartStore.cart.has(item.id) ? '#fff' : '#000',
        }
        }>{CartStore.cart.has(item.id) ? "Remove" : "Add to cart"}</Text>
      </Pressable>
    </View>


  </ScrollView>)
})

export default ProductScreen