import React from 'react';
import {
    ActivityIndicator, Text, StyleSheet, View
} from 'react-native';

const LoadingView = () => (
    <View style={Lodingstyles.loading}>
        <ActivityIndicator size="large" color="#3e9ce9" />
        <Text style={Lodingstyles.loadingText}>数据加载中...</Text>
    </View>
);


const Lodingstyles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    loadingText: {
        marginTop: 10,
        textAlign: 'center'
    }
});

export default LoadingView;
