import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { BaseScreens, BaseStackNavigationProp } from '../navigation/BaseStack';

const HomeScreen = () => {
  const { navigate } = useNavigation<BaseStackNavigationProp>();
  const handleOnPress = () => {
    navigate(BaseScreens.MetroSdkScreen)
  }
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, margin: 10 }} onPress={handleOnPress}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})