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
    Image,
    Navigator,

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
            selectedTab: 'tb_popular'
        }
    }

    render() {
        return (

            <View style={styles.container}>
                {/*<Image source={require('./images/ic_trending.png')}/>*/}

                {/*<TabNavigator>*/}
                    {/*<TabNavigator.Item*/}
                        {/*selected={this.state.selectedTab === 'tb_popular'}*/}
                        {/*title='最热'*/}
                        {/*//设置选中字体的颜色*/}
                        {/*selectedTitleStyle={{color: 'red'}}*/}
                        {/*renderIcon={() => <Image style={styles.image} source={require('./images/ic_polular.png')}/>}*/}
                        {/*//tintColor:设置图片选中后的颜色*/}
                        {/*renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]}*/}
                                                         {/*source={require('./images/ic_polular.png')}/>}*/}
                        {/*badgeText='15'*/}
                        {/*onPress={() => this.setState({*/}
                            {/*selectedTab: 'tb_popular'*/}
                        {/*})}*/}
                    {/*>*/}
                        {/*<View style={styles.pag1}></View>*/}
                    {/*</TabNavigator.Item>*/}

                    {/*<TabNavigator.Item*/}
                        {/*selected={this.state.selectedTab === 'tb_trending'}*/}
                        {/*selectedTitleStyle={{color: 'yellow'}}*/}
                        {/*title='趋势'*/}
                        {/*renderIcon={() => <Image style={styles.image} source={require('./images/ic_trending.png')}/>}*/}
                        {/*renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]}*/}
                                                         {/*source={require('./images/ic_trending.png')}/>}*/}
                        {/*badgeText='10'*/}
                        {/*onPress={() => this.setState({*/}
                            {/*selectedTab: 'tb_trending'*/}
                        {/*})}*/}
                    {/*>*/}
                        {/*<View style={styles.pag2}/>*/}
                    {/*</TabNavigator.Item>*/}
                    {/*<TabNavigator.Item*/}
                        {/*selected={this.state.selectedTab === 'tb_favorite'}*/}
                        {/*selectedTitleStyle={{color: 'yellow'}}*/}
                        {/*title='收藏'*/}
                        {/*renderIcon={() => <Image style={styles.image} source={require('./images/ic_trending.png')}/>}*/}
                        {/*renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]}*/}
                                                         {/*source={require('./images/ic_trending.png')}/>}*/}
                        {/*badgeText='10'*/}
                        {/*onPress={() => this.setState({*/}
                            {/*selectedTab: 'tb_favorite'*/}
                        {/*})}*/}
                    {/*>*/}
                        {/*<View style={styles.pag2}/>*/}
                    {/*</TabNavigator.Item>*/}
                    {/*<TabNavigator.Item*/}
                        {/*selected={this.state.selectedTab === 'tb_my'}*/}
                        {/*selectedTitleStyle={{color: 'yellow'}}*/}
                        {/*title='我的'*/}
                        {/*renderIcon={() => <Image style={styles.image} source={require('./images/ic_trending.png')}/>}*/}
                        {/*renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]}*/}
                                                         {/*source={require('./images/ic_trending.png')}/>}*/}
                        {/*badgeText='10'*/}
                        {/*onPress={() => this.setState({*/}
                            {/*selectedTab: 'tb_my'*/}
                        {/*})}*/}
                    {/*>*/}
                        {/*<View style={styles.pag2}/>*/}
                    {/*</TabNavigator.Item>*/}
                {/*</TabNavigator>*/}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 22,
        height: 22,

    }, container: {
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
