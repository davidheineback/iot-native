import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Settings from '../screens/Settings'

const Tab = createBottomTabNavigator()

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}
