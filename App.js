/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image

} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    constructor() {
        super()
        this.state = {
            selectedTab: 'home'

        }
    }

    render() {
        return (

            <View style={styles.container}>
               <Image source={require('./images/ic_trending.png')}/>

                {/*<TabNavigator>*/}
                    {/*<TabNavigator.Item*/}
                        {/*selected={this.state.selectedTab === 'home'}*/}
                        {/*title='home'*/}
                        {/*renderIcon={() => <Image source={require('./images/ic_polular.png')}/>}*/}
                    {/**/}
                        {/*renderSelectedIcon={() => <Image source={require('./images/ic_polular.png')}/>}*/}
                        {/*badgeText='1'*/}
                        {/*onPress={() => this.setState({*/}
                            {/*selectedTab: 'home'*/}
                        {/*})}*/}
                    {/*>*/}
                        {/*<View style={styles.pag1}></View>*/}
                    {/*</TabNavigator.Item>*/}

                    {/*<TabNavigator.Item*/}
                        {/*selected={this.state.selectedTab === 'profile'}*/}
                        {/*title='profile'*/}
                        {/*renderIcon={() => <Image source={require('./images/ic_trending.png.png')}/>}*/}
                        {/*renderSelectedIcon={() => <Image source={require('./images/ic_trending.png')}/>}*/}
                        {/*badgeText='1'*/}
                        {/*onPress={() => this.setState({*/}
                            {/*selectedTab: 'profile'*/}
                        {/*})}*/}
                    {/*>*/}
                        {/*<View style={styles.pag2}></View>*/}
                    {/*</TabNavigator.Item>*/}
                {/*</TabNavigator>*/}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    pag1: {
        flex: 1,
        backgroundColor: 'red'

    },
    pag2: {
        flex: 1,
        backgroundColor: 'yellow'

    }
});
