//rnfes   js için
//tsrnfs  ts için
import { FlatList, Image, ScrollView, StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GetCharacterResultsResponse } from '../models/response/GetCharacterResponse'
import axios from 'axios'
import { GetCharacterResponse } from '../models/response/Test'


const screenWidth = Dimensions.get("screen").width

type Props = {}

const Home = (props: Props) => {


  const [data, setData] = useState<GetCharacterResultsResponse[]>([])
  const [pageNumber, setPageNumber] = useState<number>(0)

  console.log(pageNumber)

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    pageNumber > 1  ? getPageData() : null
  }, [pageNumber])


  const getData = async () => {
    try {
      let response = await axios.get<GetCharacterResponse>("https://rickandmortyapi.com/api/character")
      setData(response.data.results)
    } catch (error) {
      console.log("Get Character Error",error)
    }
  }

  const getPageData = async() => {
    try {
      let response = await axios.get<GetCharacterResponse>(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
      setData([...data, ...response.data.results])
    } catch (error) {
      console.log("Get Character Page Error", error)
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
          <View style={{alignSelf: "center", marginVertical: 10}}>
            <Text style={{ fontSize: 25, color: "indianred", textAlign: "center" }}>{item.name}</Text>
            <Image source={{uri: item.image}} width={screenWidth * 8 / 10} height={200} resizeMode='contain'/>
          </View>
          
        )}
        keyExtractor={item => String(item.id)}
        // ListHeaderComponent={
        //   <Text style={{ fontSize: 50, color: "blue" }}>MErhaba Hocam</Text>
        // }
        ListEmptyComponent={<Text>Data Yok</Text>}

        //INFINITYSCROLL
        onEndReached={() => setPageNumber(pageNumber + 1)}
        onEndReachedThreshold={5}
        ListFooterComponent={
          <View style={{marginVertical: 10}}>
            <ActivityIndicator color={"indianred"} size={"large"} />
          </View>
        }
      />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})