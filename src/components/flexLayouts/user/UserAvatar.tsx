// @ts-ignore
import styled from "styled-components/native";
import { FC } from "react";
import React from "react";

interface Props {
  avatar: string
}

const UserAvatar: FC<Props> = ({avatar}) => {
  return <ArticlesItemImage source={{uri: avatar}} />
}

const ArticlesItemImage = styled.Image`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`

export default UserAvatar