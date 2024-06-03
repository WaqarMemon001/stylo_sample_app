import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevateCards() {
    return (
        <View>
            <Text style={styles.headingText}>ElevateCards</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <View style={styles.container}>
                    <View style={[styles.Elevatedcard, styles.cardOne]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[styles.Elevatedcard, styles.cardTwo]}>
                        <Text>Green</Text>
                    </View>
                    <View style={[styles.Elevatedcard, styles.cardThree]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.Elevatedcard, styles.cardFour]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.Elevatedcard, styles.cardFive]}>
                        <Text>Blue</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    Elevatedcard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#CAD5E2',
        shadowOpacity: 0.4
    },
    cardOne: {
        backgroundColor: '#CAD5E2',

    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: '#5DA3FA'
    },
    cardFour: {
        backgroundColor: '#EF5354'
    },
    cardFive: {
        backgroundColor: '#50DBB4'
    },


})