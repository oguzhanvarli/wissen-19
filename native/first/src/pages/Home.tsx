//rnfes   js için
//tsrnfs  ts için
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { GetCharacterResponse } from '../models/response/GetCharacterResponse'

type Props = {}

const Home = (props: Props) => {


  const [data, setData] = useState<GetCharacterResponse[]>([])




  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})