import React, { FC, useEffect } from "react";
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import WeatherStore from "../../store/WeatherStore";

import { observer } from "mobx-react-lite";

const CitiesScreen:FC = observer(() => {
  const {height:windowHeight, width:windowWidth} = useWindowDimensions();

  useEffect(() => {
    if(WeatherStore.currentData.weathercode === -1) {
      WeatherStore.loadWeatherData()
    }
  })


  const bgImg = require('../../../assets/weather/sunny.jpg');

  // @ts-ignore
  return <View style={{flex: 1}}>
    <View
      style={{width: windowWidth, height: windowHeight}}>
      <ImageBackground
        source={bgImg}
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <View style={styles.topInfoWrapper}>
            <View>
              <Text style={styles.city}>{WeatherStore.selectedCity.name}</Text>
            </View>
            <View>
              <Text style={styles.temparature}>
                {WeatherStore.currentData.currentTemperature > 0 ? '+' : ''}{WeatherStore.currentData.currentTemperature}{'\u2103'}
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'rgba(255,255,255,0.7)',
              borderBottomWidth: 1,
            }}
          />
          <ScrollView style={styles.bottomInfoWrapper}>
            {WeatherStore.cities.map(item => {
              return <Pressable key={item.id} style={{alignItems: 'center', paddingTop: 15, paddingBottom: 15}} onPress={() => WeatherStore.setSelectedCity(item)}>
                <Text style={styles.infoText}>{item.name}</Text>
              </Pressable>
            })}
          </ScrollView>
          </View>
      </ImageBackground>
    </View>
  </View>
})

// @ts-ignore
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topInfoWrapper: {
    flex: 1,
    marginTop: 40,
  },
  city: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  time: {
    color: '#fff',
    fontWeight: 'bold',
  },
  temparature: {
    color: '#fff',
    fontSize: 85,
  },
  weatherType: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 34,
    marginLeft: 10,
  },
  bottomInfoWrapper: {
    flexDirection: 'column',
    marginVertical: 1,
    flex: 3/5,
    backgroundColor: 'rgba(220,225,228, 0.7)',
  },
  infoText: {
    color: '#52656f',
    fontSize: 17,
    fontWeight: 'bold',
  },
  infoBar: {
    width: 45,
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  indicatorWrapper: {
    position: 'absolute',
    top: 140,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalDot: {
    height: 5,
    width: 5,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
});

export default CitiesScreen