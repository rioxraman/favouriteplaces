import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import { NavigationContainer } from '@react-navigation/native';
import IconButton from './components/UI/IconButton';
import { Colors } from './constants/colors';
import Map from './screens/Map';
const Stack = createStackNavigator();

export default function App() {
  return (
    <><StatusBar style='dark'/>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}>
      <Stack.Screen name="AllPlaces" component={AllPlaces} options={({ navigation }) => ({
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate('AddPlace')}
                />
              ),
            })} />
      <Stack.Screen name="AddPlace" component={AddPlace} options={{
              title: 'Add a new Place',
            }} />
      <Stack.Screen name="Map" component={Map} />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


