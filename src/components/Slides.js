import React from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;

const renderSlides = (data) => {
    return data.map((slide) => {
        return (
            <View key={slide.text} style={styles.slide}>
                <Text style={styles.slideText}>{slide.text}</Text>
            </View>
        )
    })
}

const Slides = ({ data }) => {
    return (
        <ScrollView
            horizontal
            pagingEnabled
            style={{ flex: 1 }}
        >
            {renderSlides(data)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    slideText: {
        fontSize: 20
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    }
})

export default Slides
