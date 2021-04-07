import React from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const renderSlides = (data, onComplete) => {
    return data.map((slide, i) => {
        return (
            <View key={i} style={styles.slide}>
                <Text style={styles.slideText}>{slide.text}</Text>
                {i === data.length - 1
                    ? <Button
                        title="Onwards"
                        buttonStyle={styles.lastSlideButton}
                        onPress={onComplete}
                    />
                    : null
                }
            </View>
        )
    })
}

const Slides = ({ data, onComplete }) => {
    return (
        <ScrollView
            horizontal
            pagingEnabled
            style={{ flex: 1 }}
        >
            {renderSlides(data, onComplete)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    slideText: {
        fontSize: 20,
        textAlign: 'center'
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    lastSlideButton: {
        marginTop: 15
    }
})

export default Slides
