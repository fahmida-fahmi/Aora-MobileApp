import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Slot, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const RooyLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown: false}} />
    {/* <Text>Header</Text>
      <Slot/>
      <StatusBar style='auto'/>
      <Link href="/profile" style={{color:'blue'}}>Go to Profile</Link> */}

    </Stack>
  )
}

export default RooyLayout

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})