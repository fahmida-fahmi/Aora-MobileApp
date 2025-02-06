import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className='flex items-center justify-center bg-black'>
      <Text>Aora!</Text>
      <StatusBar style='auto'/>
            <Link href="/profile" style={{color:'blue'}}>Go to Profile</Link>
    </View>
  )
}

export default index
