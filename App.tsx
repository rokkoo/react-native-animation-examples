import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

import Colors from './src/Colors';

import RadiusBackground from './src/exmaples/RadiusBackground';
import TabHeart from './src/exmaples/TabHeart';

const Stack = createStackNavigator();

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.contianer}>
      <ScrollView>
        <Pressable
          onPress={() => navigation.navigate('RadiusBackground')}
          style={styles.screenContianer}
        >
          <View>
            <Text style={styles.screenTitle}>Radius background</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('TabHeart')}
          style={styles.screenContianer}
        >
          <View>
            <Text style={styles.screenTitle}>TabHeart</Text>
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
          <Stack.Screen name="TabHeart" component={TabHeart} />
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
    marginVertical: 10,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#17202A',
  },
});
