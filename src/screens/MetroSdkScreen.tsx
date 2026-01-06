import { StyleSheet, View } from 'react-native'
import React from 'react'
import { initializeSdk, MetroApp } from 'oneticket-sdk-vi'
import { useNavigation } from '@react-navigation/native'
import { BaseScreens, BaseStackNavigationProp } from '../navigation/BaseStack'
import CryptoJS from "crypto-js";

const MetroSdkScreen = () => {
  const { navigate, goBack } = useNavigation<BaseStackNavigationProp>();

  const handleDeepLink = () => {
    navigate(BaseScreens.HomeScreen);
  }

  const onPageLoadEvent = (screen: string) => {
    console.log("screen", screen);
  }

  initializeSdk({
    environment: 'preprod',
    sdkKey: "e86bd708-1713-4186-a00a-74d3e6ea87a8",
    colorPalette: {
      50: '#fde8e9',
      100: '#f9c5c7',
      200: '#f59fa2',
      300: '#f1787d',
      400: '#ed585f',
      500: '#EE2737', // main
      600: '#d5202f',
      700: '#b51927',
      800: '#96131f',
      900: '#670b14',
    },
    logo: "https://storage.googleapis.com/sequelstring-website-prod/vodaphone/vi-red-logo.svg"
  })

  const generateChecksum = (userObj: {
    name: string;
    email: string;
    phoneNumber: string;
  }) => {
    const message = JSON.stringify(userObj);
    const secretKey = 'RSeKgNkRnTqWtYv2y5A7Ca==';
    const checksum = CryptoJS.HmacSHA256(message, secretKey)
      .toString(CryptoJS.enc.Hex);   // or Base64
    console.log("====================== checksum ===>", checksum)
    return checksum;
  }

  const user = {
    name: "Test",
    phoneNumber: 9876543210,
    email: "test@gmail.com"
  }

  return (
    <View style={styles.container}>
      <MetroApp
        userConfig={{
          user: {
            ...user,
            checkSum: generateChecksum({...user, phoneNumber: user.phoneNumber.toString()})
          }
        }}
        onPageLoadEvent={onPageLoadEvent}
        goBackHandler={goBack}
        handleDeepLinkClick={handleDeepLink}
        onSelectMetro={data => console.log("onSelectMetro", data)}
        onSelectStations={data => console.log("onSelectStations", data)}
        onChooseTicketType={data => console.log("onChooseTicketType", data)}
      />
    </View>
  )
}

export default MetroSdkScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})