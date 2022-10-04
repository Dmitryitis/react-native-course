import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from 'react'

const Home = () => {
  const post = {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }

  return <SafeAreaView style={stylesPage.container}>
    return  <View style={styles.container}>
    <View style={styles.coverCard}>
      <Image source={staticImage} style={styles.image} />
    </View>

    <View style={styles.taskInfo}>
      <Text style={styles.taskTitle}>{post.title}</Text>

      <View style={styles.taskBottom} />

      <View style={styles.taskBottom} />
    </View>
  </View>
  </SafeAreaView>
}

const stylesPage = StyleSheet.create({
  container: {
    width: "100%",
    display: 'flex',
    flexDirection: "column"
  }
})

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "231px",
    backgroundColor: "white",
    borderRadius: 15,
    margin: "12px",
    display: "flex",
    flexDirection: "column",
  },
  coverCard: {
    width: "100%",
    maxHeight: "144px",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  taskInfo: {
    marginTop: "40px"
  },
  taskBottom: {
    marginBottom: "30px"
  },
  taskTitle: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
  },
  taskDescription: {
    color: "rgba(193, 193, 193, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
  }
})

const shadowOpt = {
  width: "100%",
  color:"rgba(0, 0, 0, 0.1)",
  border:0,
  radius:10,
  opacity:0.2,
  x:0,
  y:3,
}

const staticImage = require("../static/defaultTask.jpg");

export default Home