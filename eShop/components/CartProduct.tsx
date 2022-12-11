import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";

const CartProduct = (
  product: Product,
) => {

  return <TouchableOpacity style={{marginBottom: 10}} onPress={() => {
  }}><View style={{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }}>
    <View style={{
      flexDirection: "row"
    }}>
      <Image
        style={{
          height: 64,
          width: 64,
          shadowColor: "#ff00ef",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.9,
          shadowRadius: 3,
        }}
        source={{uri: product.avatar}}
      />
      <View style={{marginStart: 16, justifyContent: "center"}}>
        <Text style={{fontSize: 18, fontWeight: "500"}}>{product.title}</Text>
      </View>
    </View>
    <Text style={{fontSize: 18, fontWeight: "500", color: "gray"}}>{product.price}$</Text>
  </View>
  </TouchableOpacity>
}

export default CartProduct