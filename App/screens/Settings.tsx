import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ContextObject, Resolution } from '../components/Context'
import Button from '../components/Button'

function Settings() {
  const { resolution, setResolution } = React.useContext(ContextObject)

  return (
    <View style={styles.container}>
      <Text>Choose resolution</Text>
      {Object.entries(Resolution).map(([key, value], index) => {
        return (
          <Button
            key={index}
            value={key}
            onPress={() => setResolution(value)}
            active={value === resolution}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})

export default Settings
