import React from 'react';
import {  View } from 'react-native';

/*
 * 1) 기본적으로 모든 View 는 Flex Container 다.
 * 2) 웹에서 Flex Direction 의 기본값은 Row 이지만, 모바일에서 기본값은 Column 이다. (=> flexDirection: "row" 로 변경 가능)
 * 3) 웹이 아니기 때문에 Overflow 가 있어도 자동 스크롤이 불가능하다.
 * 4) 부모 View 에 flex 를 지정하면, 자식 View 에서 flex 로 크기 비율을 설정할 수 있다.
 */
export default function App() {
  return (
    <View style={{flex: 1, flexDirection: "row"}}>
      <View style={{flex: 1, backgroundColor: "tomato"}}></View>
      <View style={{flex: 1, backgroundColor: "teal"}}></View>
      <View style={{flex: 1, backgroundColor: "orange"}}></View>
    </View>
  );
}