import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    useColorScheme,
} from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Props } from '../../components/navigation';
import { StackScreenProps } from '@react-navigation/stack'

type DemoStackParamList = {
    Demo: { name: string, phone: number }
}

const Demo = (props: StackScreenProps<DemoStackParamList, 'Demo'>) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    console.log('demo props', props.route.params.name)
    console.log('navighate', props.navigation.navigate('Demo', { name: 'manish', phone: 5 }))
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View>
                    <Text>Demo</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Demo;

const styles = StyleSheet.create({});
