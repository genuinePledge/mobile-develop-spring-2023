import { StyleSheet } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { COLORS } from './config'
import Task1 from './pages/Task1'
import Icon1 from 'react-native-vector-icons/AntDesign'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Task2 from './pages/Task2'

const Tab = createBottomTabNavigator()

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: COLORS.PRIMARY,
    },
}

const App = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let icon
                        let color = focused ? 'white' : COLORS.BLUE
                        if (route.name === 'Task1') {
                            icon = (
                                <Icon1
                                    name="filetext1"
                                    size={30}
                                    color={color}
                                />
                            )
                        } else if (route.name === 'Task2') {
                            icon = (
                                <Icon1
                                    name="filetext1"
                                    size={30}
                                    color={color}
                                />
                            )
                        }
                        return icon
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabel: () => {
                        return null
                    },
                    tabBarStyle: {
                        backgroundColor: COLORS.SECONDARY,
                        height: 90,
                        borderTopWidth: 0,
                    },
                })}
            >
                <Tab.Screen
                    name="Task1"
                    component={Task1}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Task2"
                    component={Task2}
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})

export default App
