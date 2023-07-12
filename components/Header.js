import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

const Header = () => {
    return <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Welcome to VoiceGPT!</Text>
            <Text style={styles.sectionDescription}>Use your voice to get your anwsers from chatGPT!!! </Text>
        </View>;
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        marginLeft: 30,
        paddingHorizontal: 24,

    },
    sectionTitle: {
        fontSize: 40,
        fontWeight: '800',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '400',
    },
})

export default Header;
