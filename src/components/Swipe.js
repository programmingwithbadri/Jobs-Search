import React, { useState, useEffect } from 'react';
import {
    View,
    Animated,
    PanResponder,
    Dimensions,
    LayoutAnimation,
    UIManager
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

const Swipe = ({ onSwipeLeft, onSwipeRight, data, renderCard, renderNoMoreCards }) => {
    const position = new Animated.ValueXY();
    const [index, setIndex] = useState(0);
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
            position.setValue({ x: gesture.dx, y: gesture.dy });
        },
        onPanResponderRelease: (event, gesture) => {
            if (gesture.dx > SWIPE_THRESHOLD) {
                forceSwipe('right');
            } else if (gesture.dx < -SWIPE_THRESHOLD) {
                forceSwipe('left');
            } else {
                resetPosition();
            }
        }
    })

    useEffect(() => {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }, []);

    const forceSwipe = (direction) => {
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(position, {
            toValue: { x, y: 0 },
            useNativeDriver: false,
            duration: SWIPE_OUT_DURATION
        }).start(() => onSwipeComplete(direction));
    }

    const onSwipeComplete = (direction) => {
        const item = data[index];
        direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
        position.setValue({ x: 0, y: 0 });
        setIndex(index + 1)
    }

    const resetPosition = () => {
        Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
        }).start();
    }

    const getCardStyle = () => {
        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['-120deg', '0deg', '120deg']
        });

        return {
            ...position.getLayout(),
            transform: [{ rotate }]
        };
    }

    const renderCards = () => {
        if (index >= data.length) {
            return renderNoMoreCards();
        }

        return data.map((item, i) => {
            if (i < index) { return null; }
            if (i === index) {
                return (
                    <Animated.View
                        key={item.id}
                        style={[getCardStyle(), styles.cardStyle, { zIndex: 99 }]}
                        {...panResponder.panHandlers}
                    >
                        {renderCard(item)}
                    </Animated.View>
                );
            }

            return (
                <Animated.View
                    key={item.id}
                    style={[styles.cardStyle, { top: 10 * (i - index), zIndex: 5 }]}
                >
                    {renderCard(item)}
                </Animated.View>
            );
        }).reverse();
    }

    return (
        <View>
            {renderCards()}
        </View>
    );

}

Swipe.defaultProps = {
    onSwipeRight: () => { },
    onSwipeLeft: () => { }
}

const styles = {
    cardStyle: {
        position: 'absolute',
        width: SCREEN_WIDTH
    }
};

export default Swipe;