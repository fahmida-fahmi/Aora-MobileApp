import {  Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

import { SafeAreaView } from 'react-native-safe-area-context'
import  {images}  from "../constants";
import 'nativewind'

const App = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{
        height: '100%',
      }}>
        <View className='w-full items-center px-4'>
          <Image 
          source={images.logo}
          className='w-[130px] h-[80px]'
          resizeMode='contain'
          // style={{ width: 130, height: 80, maxWidth: 130, maxHeight: 80 }}
          />

          <Image
          source={images.cards}
          className='max-w-[380px] w-full h-[300px]'
          resizeMode='contain'
          />
        </View>
        <View className='relative mt-5'>
          <Text className='text-3xl text-white font-bold text-center '>
            Discover Endless Possibilities with {' '}
            <Text className='text-secondary-200'>Aora</Text>
          </Text>
          <Image
          source={images.path}
          className='w-[136px] h-[150px] absolute -bottom-2 right-8'
          resizeMode='contain'
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default App
