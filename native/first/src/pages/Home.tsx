//rnfes   js için
//tsrnfs  ts için
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GetCharacterResultsResponse } from '../models/response/GetCharacterResponse'
import axios from 'axios'
import { GetCharacterResponse } from '../models/response/Test'

type Props = {}

const Home = (props: Props) => {


  const [data, setData] = useState<GetCharacterResultsResponse[]>([])

  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {
    try {
      let response = await axios.get<GetCharacterResponse>("https://rickandmortyapi.com/api/character")
      // setData(response.data.results)
    } catch (error) {
      console.log("Get Character Error")
    }
  }


  return (
    // <ScrollView>
    //  {
    //   data.map(character => (
    //     <Text style={{fontSize:50}}>{character.name}</Text>
    //   ))
    //  }
    // </ScrollView>
    <View>

      <FlatList
        // horizontal
        data={data}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 50, color: "indianred" }}>{item.name}</Text>
        )}
        ListHeaderComponent={
          <Text style={{ fontSize: 50, color: "blue" }}>MErhaba Hocam</Text>
        }
        ListEmptyComponent={<Text>Data Yok</Text>}
      />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})