import React from 'react'
import io from 'socket.io-client'
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Button,
  ActivityIndicator,
  RefreshControl,
} from 'react-native'
import useFetch, { ValidResponse } from '../hooks/useFetch'
import { ContextObject } from '../components/Context'

function Home() {
  const { resolution } = React.useContext(ContextObject)
  const { data, getImage, loading } = useFetch(
    `http://192.168.68.115/cam-${resolution}.jpg`,
    ValidResponse.blob
  )

  const [refreshing, setRefreshing] = React.useState(false)

  async function handleCapture() {
    await getImage()
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleCapture} />
      }
    >
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        <Image source={{ uri: data }} style={styles.tinyLogo} />
        <Button onPress={handleCapture} title="Capture" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 50,
    justifyContent: 'center',
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

export default Home
