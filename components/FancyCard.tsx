import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Place</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <Image style={styles.cardImage} source={{ uri: 'https://images.pexels.com/photos/2884865/pexels-photo-2884865.jpeg' }} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawal Mahal</Text>
                    <Text style={styles.cardLabel}>Hawal Mahal is a historical place</Text>
                    <Text style={styles.cardDiscript}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
                        red and pink sandstone, it is on the edge of the City Palace.</Text>
                    <Text style={styles.cardFooter}>12 min Away</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 360,
        height: 370,
        marginVertical: 12,
        marginHorizontal: 16,
        borderRadius: 6,

    },
    elevatedCard: {
        // backgroundColor : '' 
        backgroundColor: '#000000',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom : 8,
        borderTopRightRadius:6,
        borderTopLeftRadius:6,
    },
    cardBody: {
        paddingHorizontal: 12,
        flex : 1, 
        flexGrow : 1
    },
    cardTitle: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    }, cardLabel: {
        color: '#ffffff',
        fontSize:16,
    }, cardDiscript: {
        color: '#ffffff',
        fontSize :12,
        marginBottom : 12,
        marginTop: 6,
        flexShrink : 1
    }, cardFooter: {
        color: '#ffffff'
    }
})