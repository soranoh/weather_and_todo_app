import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { Fontisto } from '@expo/vector-icons';

/*
 * 1) @expo/vector-icons 을 import 하면 다양한 아이콘 사용이 가능하다.
 */

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");
const API_KEY = "c98a5472c486ce0b0bd8358755295e89";
const icons = {
  "Clouds": "cloudy",
  "Rain": "rains",
  "Clear": "day-sunny",
  "Snow": "snow",
  "Atmosphere": "cloudy-qusts",
  "Drizzle": "rain",
  "Thunderstorm": "lightning"
};

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted) {
      setOk(false);
    }
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy: 5});
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false});
    setCity(location[0].region);
    const response = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`);
    const json = await (await response).json();
    setDays(json.daily);
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.weather} horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {days.length === 0 ? (
            <View style={styles.day}>
              <ActivityIndicator color="white" style={{marginTop: 10}} size="large" />
            </View>
          ) : (
            days.map((day, index) => 
              <View key={index} style={styles.day}>
                <View style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center"
                }}>
                  <Text style={{...styles.temp, marginTop: -30}}>{parseFloat(day.temp.day).toFixed(1)}</Text>
                  <Fontisto name={icons[day.weather[0].main]} size={60} color="white" />
                </View>
                <Text style={{...styles.temp, fontSize: 40, marginTop: -10}}>{parseFloat(day.temp.morn).toFixed(1)} / {parseFloat(day.temp.night).toFixed(1)}</Text>
                <Text style={styles.tinyText}>{day.weather[0].description}</Text>
              </View>
            )
        )}
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
    color: "white"
  },
  weather: {

  },
  day: {
    width: SCREEN_WIDTH,
    //alignItems: "center",
  },
  temp: {
    fontSize: 100,
    marginTop: 50,
    color: "white"
  },
  description: {
    fontSize: 40,
    marginTop: -30,
    color: "white"
  },
  tinyText: {
    fontSize: 20,
    color: "white"
  }
});