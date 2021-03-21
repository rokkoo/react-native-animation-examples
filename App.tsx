import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import RadiusBackground from './src/exmaples/RadiusBackground';
import Colors from './src/Colors';
import { ScrollView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.contianer}>
      <ScrollView>
        <Pressable onPress={() => navigation.navigate('RadiusBackground')}>
          <View style={styles.screenContianer}>
            <Text style={styles.screenTitle}>Radius background</Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.contianer}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RadiusBackground" component={RadiusBackground} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  screenContianer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#17202A',
  },
});
