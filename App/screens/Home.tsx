import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import useFetch, { ValidResponse } from '../hooks/useFetch'

function Home() {
  const [image, setImage] = React.useState('')

  const { data } = useFetch(
    'http://192.168.1.141/cam-hi.jpg',
    ValidResponse.blob
  )
  console.log(data)

  return (
    <View>
      <Text>Home</Text>
      <Image source={{ uri: data }} style={styles.tinyLogo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
  logo: {
    width: 66,
    height: 58,
  },
})

//http://192.168.1.141/cam-hi.jpg

export default Home
