import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bookStore } from '../data/books';
import { useState } from 'react';

export default function About({ navigation }) {

    const [data, setData] = useState();

    const addingData = () => {
        console.log("Started");
        setData(bookStore);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Welcome to the dashboard</Text>
            <Button title="Show data" onPress={() => addingData()} />
            {
                data && data.books.map((b, index) => {
                    if (b.category.toLowerCase() == 'java') {
                        return (
                            <View key={index}>
                                <Text style={styles.titleText}>{b.title}</Text>
                                {
                                    b.authors && b.authors.map((a, ind) => {
                                        return (
                                            <View key={ind}>
                                                <Text style={styles.authorText}>{a}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        )
                    }

                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#63C5DA',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25
        
    },
    titleText: {
        fontSize: 20
    },
    authorText: {
        fontSize: 14,
        fontStyle: 'italic'
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold'
    }

});
