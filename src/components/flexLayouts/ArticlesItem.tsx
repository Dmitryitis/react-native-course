import React from "react";
import { ArticleItem } from "./types";
import { Text } from "react-native";
// @ts-ignore
import styled from "styled-components/native";

const ArticlesItem: React.FC<ArticleItem> = ({article}) => {
  return <ArticlesItemContainer>
    <ArticlesItemImage source={{uri: article.avatar}} />
    <Text ellipsizeMode={"tail"} style={{fontSize: 16, color: "#5ca5ff"}}>{article.text}</Text>
  </ArticlesItemContainer>
}

const ArticlesItemContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 13px 15px;
  border-radius: 15px;
  margin-bottom: 10px;
  background-color: #fff;
`

const ArticlesItemImage = styled.Image`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 10px;
`

export default ArticlesItem