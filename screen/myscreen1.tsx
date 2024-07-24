import React from 'react'
import { View } from 'react-native'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import MainCardComponent from '../components/MainCardComponent'

const myscreen1 = () => {
  return (
    <View>
      <NavBar/>
      <Header/>
      <MainCardComponent/>
    </View>
  )
}

export default myscreen1
