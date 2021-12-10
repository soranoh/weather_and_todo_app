import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import * as Location from 'expo-location';

/*
 * 1) requestForegroundPermissionsAsync() : 앱을 사용하는 중에 위치와 관련된 권한을 확인한다.
 *    앱에서 권한 허용을 하면은 requestForegroundPermissionsAsync.granted = true 로 설정된다.
 * 2) getCurrentPositionAsync() : 사용자 디바이스의 현재 위치 관련 정보를 가져온다.
 *    accuracy 는 얼마나 정확한 위치를 가져오는지에 대한 설정이다.(1~6, 숫자가 높을수록 자세하다.)
 *    latitude(위도), longitude(경도) 데이터도 있다.
 * 3) reverseGeocodeAsync() : 위도, 경도를 통해 현재 위치를 가져온다.
 */

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [location, setLocation] = useState(null);
  const [ok, setOk] = useState(true);
  const ask = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted) {
      setOk(false);
    }
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy: 5});
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false});
    setCity(location[0].region);
  }

  useEffect(() => {
    ask();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.weather} horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        <View style={styles.day}>
          <Text style={styles.temp}>10</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>11</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>12</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>13</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {

  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    fontSize: 178,
    marginTop: 50
  },
  description: {
    fontSize: 60,
    marginTop: -30
  },
});