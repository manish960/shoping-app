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
import Demo from '../../screen/demo';

type RootStackParamList = {
  TabHome: undefined;
  Dashboard: {userId: string};
  Login: undefined;
  Demo: {name: string; phone: number};
  // Feed: { sort: 'latest' | 'top' } | undefined;
};
export type Props = NativeStackScreenProps<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Demo" component={Demo} initialParams={{ phone: 42 }}/>
        <Stack.Screen name="TabHome">
          {props => {
            console.log('props', props);
            return (
              <>
                <TabNavigation />
                {/* <DrawerNavigation/> */}
              </>
            );
          }}
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
