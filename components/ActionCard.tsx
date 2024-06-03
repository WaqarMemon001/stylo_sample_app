import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { useState } from 'react';
import ElevateCards from './ElevateCards'

export default function ActionCard() {
    const [expended, setexpended] = useState(false)
    function openWebsite(WebsiteLink: string) {
        Linking.openURL(WebsiteLink)
    }

    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in Javascript 21 - ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.jpg?s=1024x1024&w=is&k=20&c=iGiUPCesPFZq06F0eE_I72w5Z7dW_LgUeciGmyONLcM=',
                    }}
                    style={styles.cardImage}

                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={expended ? 5 : 2} style={styles.blogCardText}>
                        Just like every year, Javascript brings in new features. This year
                        javascript is bringing 4 new features, which are almost in
                        production rollout. I won't be wasting much more time and directly
                        jump to code with easy to understand examples.
                    </Text>
                    <View style={styles.blogCardFooter}>
                        <TouchableOpacity >
                            <Text style={styles.socialLinks} onPress={() => setexpended(!expended)} >{expended ? 'Hide' : 'Readmore'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles.socialLinks} onPress={() => openWebsite('https://github.com/WaqarMemon001')}>Follow me</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        paddingHorizontal: 8,
        fontSize: 24,
        fontWeight: 'bold'
    },
    card: {
        width: 350,
        height: 'auto',
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    blogCardText: {
        color: '#fff'
    },
    blogCardFooter: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderRadius: 6,

    }
})