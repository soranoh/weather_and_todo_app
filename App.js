import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

/*
 * 1) 웹처럼 자동 스크롤이 없기 때문에 View -> ScrollView 로 사용해야 한다.
 * 2) ScrollView 에서는 style -> contentContainerStyle 로 사용해야지 설정된 사이즈가 적용된다.
 * 3) 스크린보다 사이즈가 커야 스크롤이 생기기 때문에 ScrollView 에서는 flex 사이즈가 필요없다.
 * 4) Deimensions 로 스크린의 크기를 알 수 있다.(height, width)
 * 5) pagingEnabled 로 자유분방한 스크롤을 페이징과 비슷하게 잡아준다.
 * 6) showsHorizontalScrollIndicator(혹은 showsVerticalScrollIndicator) 로 스크롤바를 숨긴다.
 */

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
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