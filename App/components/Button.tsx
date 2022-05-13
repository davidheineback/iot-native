import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

function Button({
  active = false,
  onPress,
  value,
}: {
  active?: boolean
  onPress: (e?: any) => any
  value: string
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, active && styles.active]}
    >
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: 'teal',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginBottom: 10,
    width: 300,
  },
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})

export default Button
