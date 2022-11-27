import React from "react";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
// @ts-ignore
import styled from "styled-components/native";

const ArticleItem:FC = () => {
  return <View style={{flex: 1, backgroundColor: '#fff'}}>
    <View style={{flex: 1/6, backgroundColor: '#6ba0fa', alignItems: 'center', justifyContent: 'center'}} >
      <Text style={{textAlign: 'center', fontSize: 25, color: '#fff'}}>Article</Text>
    </View>
    <View style={{flex: 5/6, padding: 10}}>
      <Text style={{fontSize: 22,color: '#000', fontWeight: 'bold', marginBottom: 15}}>Lorem ipsum dolor sit amet, consectetur .</Text>
      <Text style={{textAlign: 'left', fontSize: 16, color: '#000', marginBottom: 15}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid atque, culpa dicta dolorem enim harum illum natus nihil non nulla pariatur quia, quidem quo reprehenderit rerum similique sit tenetur.</Text>
      <Text style={{textAlign: 'left', fontSize: 16, color: '#579af6', marginBottom: 15}}>lotr fsd fds fsf sdfsdf sdfds </Text>
      <Text style={{textAlign: 'left', fontSize: 13,  marginBottom: 20, color: '#000'}}>2022-12-2334 456:04:00</Text>

      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
        <ArticlesItemImage source={logo} />
        <Text style={{fontSize: 20, color: '#579af6', marginLeft: 15}}>Richard Jonf</Text>
      </View>

      <TouchableOpacity style={{alignItems:'center',backgroundColor:'#438df1',borderRadius: 15,  justifyContent: 'center', paddingTop: 10, paddingBottom: 10, paddingLeft: 15,paddingRight:15}}>
        <Text style={{textAlign:'center', color: '#fff'}}>Like</Text>
      </TouchableOpacity>
    </View>
  </View>
}

const logo = require("../../static/iconLike.png");
const ArticlesItemImage = styled.Image`
  width:  60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: white;
`

export default ArticleItem