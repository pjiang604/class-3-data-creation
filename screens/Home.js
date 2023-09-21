import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import * as React from 'react';
import { Avatar, Button } from 'react-native-paper';

export default function Home({ navigation }) {

    const [number, setNumber] = useState(1);

    const check = () => {
        if (number == 1) {
            console.log("ONE");
        } else if (number == 2) {
            console.log("TWO");
        } else if (number == 3) {
            navigation.push('About');
        }
        setNumber(number + 1);

    }

    const AvatarComp = () => (
        <TouchableOpacity onPress={() => {console.log("pressedIcon"); alert("You pressed me!")}}>
        <Avatar.Icon size={50} icon="account-circle-outline" />
        </TouchableOpacity>
    );

    const ButtonComp = () => (
        <Button icon="camera" mode="contained-tonal" onPress={() => {console.log('Pressed'); alert("Hello Monika")}}>
            Press me
        </Button>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => check()}
                style={number === 1 ? styles.btnBlue :
                    number === 2 ? styles.btnRed : styles.btnGreen}>
                <Text>Click Me!</Text>
            </TouchableOpacity>
            <AvatarComp />
            <ButtonComp />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 50,
    },
    btnBlue: {
        alignItems: 'center',
        backgroundColor: '#63C5DA',
        borderColor: '#63C5DA',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    },
    btnRed: {
        alignItems: 'center',
        backgroundColor: '#800000',
        borderColor: '#800000',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    },
    btnGreen: {
        alignItems: 'center',
        backgroundColor: '#00563B',
        borderColor: '#00563B',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    }
});
