import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*
 * 1) StatusBar 는 시계, 배터리, Wi-Fi 등 운영체제의 상단 상태바와 소통하는 방법이다.
 * 2) StyleSheet.create 를 사용해야 자동완성 기능이 가능하다.
 * 3) 웹 브라우저가 아닌 앱!!! 이다.
 */
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>** SoraWeather **</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    color: "skyblue"
  }
});
