import { Button, StyleSheet, Text, View } from "react-native"

const App = () => {

  return (
    <>
      <Text style={{fontSize: 35, color: "indianred", fontWeight: "800"}}>Merhaba React Native</Text>
      <Text style={style.secondText}>Ben Oğuzhan Hoca</Text>
      <View>
        <Text>Nasılsın</Text>
      </View>
      <Button title="Change" onPress={undefined} color={"red"}></Button>
    </>
  )
}
export default App

const style = StyleSheet.create({
  secondText : {
    fontSize: 40,
    color: "blue",
    textAlign: "center"
  }
})