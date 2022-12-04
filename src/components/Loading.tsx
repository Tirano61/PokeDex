

import React from 'react'
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';

export const Loading = () => {
  return (
    <View style={style.container}>
        <ActivityIndicator 
          size={40}
          color= '#bababa'
        />
        <Text>Cargando</Text>
    </View>
  )
}
const style = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});