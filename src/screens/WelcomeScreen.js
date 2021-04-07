import React from 'react'
import Slides from '../components/Slides'

const SLIDE_DATA = [
    {
        text: 'Welcome to Job Search App'
    },
    {
        text: 'Use this to get job'
    },
    {
        text: 'Set your location, then swipe away'
    }
];

const onSlidesComplete = () => {

}

const WelcomeScreen = ({ navigation }) => {
    return (
        <Slides
            data={SLIDE_DATA}
            onComplete={() => {
                navigation.navigate('Auth')
            }}
        />
    )
}

export default WelcomeScreen
