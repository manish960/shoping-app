import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Home from '../../screen/home';
import Login from '../../screen/login';
import TabNavigation from './tabNavigation';
import DrawerNavigation from './drawerNavigation';

type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
  Login: undefined;
};
export type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home">
          {() => (
            <>
              <TabNavigation />
              {/* <DrawerNavigation/> */}
            </>
          )}
        </Stack.Screen>
        <Stack.Screen name="Dashboard">
          {() => (
            <>
              <DrawerNavigation />
            </>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
