import React from "react";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
// @ts-ignore
import styled from "styled-components/native";

const Success:FC = () => {
  return <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
    <ArticlesItemImage source={logo} />
    <Text style={{fontSize: 30, color: '#343434', marginBottom: 20, textAlign: 'center'}}>Congratulation is Success</Text>
    <Text style={{fontSize: 20,color: '#a6a6a6',  marginBottom: 20, textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi corporis deserunt dolorem</Text>
    <TouchableOpacity style={{alignItems:'center',backgroundColor:'#438df1',width: 170,borderRadius: 15,  justifyContent: 'center', paddingTop: 10, paddingBottom: 10, paddingLeft: 15,paddingRight:15}}>
      <Text style={{textAlign:'center', color: '#fff'}}>Continue</Text>
    </TouchableOpacity>
  </View>
}

const logo = require("../../static/iconLike.png");

const ArticlesItemImage = styled.Image`
  width:  100px;
  height: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
`

export default Success