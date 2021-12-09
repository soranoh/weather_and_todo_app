import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*
 * 1) 기본적으로 모든 View 는 Flex Container 다.
 * 2) 웹에서 Flex Direction 의 기본값은 Row 이지만, 모바일에서 기본값은 Column 이다. (=> flexDirection: "row" 로 변경 가능)
 * 3) 웹이 아니기 때문에 Overflow 가 있어도 자동 스크롤이 불가능하다.
 * 4) 부모 View 에 flex 를 지정하면, 자식 View 에서 flex 로 크기 비율을 설정할 수 있다.
 */
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </View>
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
    flex: 3,
  },
  day: {
    flex: 1,
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