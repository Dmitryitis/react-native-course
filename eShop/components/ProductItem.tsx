import { FC } from "react";
// @ts-ignore
import styled from "styled-components/native";
import { View, Text } from "react-native";
import React from "react";
import { HeartIcon as HeartIconOutline } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

interface Props {
  product: Product
}

const ProductItem: FC<Props> = ({product}) => {
  const navigate = useNavigation()

  const onClick = () => {
    // @ts-ignore
    navigate.navigate('Product', {
      item: product
    })
  }

  return <UserTouchable onPress={onClick}>
    <View style={{flex:1,flexDirection: 'row', alignItems: 'center'}}>
      <ArticlesItemImage source={{uri: product.avatar}} />
      <View style={{flex: 1,flexDirection: 'column'}}>
        <Text style={{color: '#000', fontSize: 17}}>{product.title}</Text>
      </View>
    </View>

    <View >
      <HeartIconOutline size={20} color={'#000'} />
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
`

const ArticlesItemImage = styled.Image`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50px;
  margin-right: 10px;
`

export default ProductItem