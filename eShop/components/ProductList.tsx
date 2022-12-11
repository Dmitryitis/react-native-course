import React, { useState } from "react";
import { Alert, FlatList, RefreshControl, View } from "react-native";
import Loading from "./Loading";
import { observer } from "mobx-react-lite";
import ProductStore from "../store/ProductStore";
import ProductItem from "./ProductItem";


const ProductList = observer(() => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [items, setItems] = React.useState<Product[] | []>([]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true)
      const data: Product[] = Object.assign([],ProductStore.products)
        setItems(data)
    } catch (e) {
      Alert.alert('Ошибка', 'Не удалось получить пользователей')
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    fetchProducts()
  }, [])

  if (isLoading) return <Loading />

  return <View>
    <FlatList
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchProducts} />}
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <ProductItem product={item} />} />
  </View>
})

export default ProductList