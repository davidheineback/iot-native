import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Navigation from './config/Navigation'
import Context from './components/Context'

export default function App() {
  return (
    <Context>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Navigation />
    </Context>
  )
}

//http://192.168.1.141/cam-hi.jpg
