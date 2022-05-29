import React from 'react'
import Pusher from 'pusher-js/react-native'

import {
  Alert,
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
  const [busy, setBusy] = React.useState(false)

  const key = process.env.PUSHER_KEY

  const { data, getImage, loading } = useFetch(
    `http://192.168.68.115/cam-${resolution}.jpg`,
    ValidResponse.blob
  )

  console.log(key)

  const pusher = new Pusher(key as string, {
    cluster: 'eu',
  })

  const channel = pusher.subscribe('my-channel')

  channel.bind('my-event', async function (data: any) {
    console.log('got a call')
    if (!busy) {
      await handleMotion()
    }
  })

  const [refreshing, setRefreshing] = React.useState(false)

  async function handleMotion() {
    console.log('')
    setBusy(true)
    await getImage()
    Alert.alert('Motion detected', 'Captured Image!', [
      {
        text: 'OK!',
        onPress: () => setBusy(false),
      },
    ])
  }

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
