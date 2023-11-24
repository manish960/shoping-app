import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Input} from '@rneui/base';
import {Button} from '@rneui/themed';
import axios from 'axios';
import {Dimensions} from 'react-native';
import {Props} from '../../components/navigation';

const Login = (props: any) => {
  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleUsername = (username: string) => {
    setUsername(username);
  };
  const handlePassword = (password: string) => {
    setPassword(password);
  };

  const handleSubmit = () => {
    axios
      .post('https://dummyjson.com/auth/login', {username, password})
      .then(response => {
        console.log('response', response);
      });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Text style={styles.heading}>Login</Text>
            <View style={{flex: 2}}>
              <Input
                placeholder="Enter Username"
                onChangeText={handleUsername}
                value={username}
              />
              <Input
                placeholder="Password"
                onChangeText={handlePassword}
                value={password}
              />
              <Button type="solid" title={'login'} onPress={handleSubmit} />
              <View style={styles.link}>
                <Text>don't have account</Text>
                <Button type="clear" title={'create one'} />
              </View>
            </View>
            <View>
              <Button
                type="outline"
                title={'login as guest'}
                onPress={() => props.navigation.navigate('Home')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  wrapper: {
    width: '80%',
    gap: 10,
    justifyContent: 'space-between',
    height: ScreenHeight - 100,
  },
  heading: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
  link: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
});
