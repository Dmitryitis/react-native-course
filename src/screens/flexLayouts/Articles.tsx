import React, { useState } from "react";
import { Alert, FlatList, RefreshControl, View } from "react-native";
import Api from "src/api";
import { AxiosResponse } from "axios";
import { Article } from "src/components/flexLayouts/types";
import Loading from "src/components/flexLayouts/Loading";
import ArticlesItem from "src/components/flexLayouts/ArticlesItem";

const Articles: React.FC = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [items, setItems] = React.useState<Article[] | []>([]);

  const fetchArticles = async () => {
    try {
      setIsLoading(true)
      const {data}: AxiosResponse<Article[]>  = await Api.getAllArticles()
      setItems(data)
    } catch (e) {
      Alert.alert('Ошибка', 'Не удалось получить статьи')
    } finally {
      setIsLoading(false)
    }

  }

  React.useEffect(() => {
    fetchArticles()
  }, [])

  if (isLoading) return <Loading />

  return <View>
    <FlatList
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchArticles} />}
      data={items}
      renderItem={({item}) => <ArticlesItem article={item} />} />
  </View>
}

export default Articles