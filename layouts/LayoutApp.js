import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './LayoutApp.Styles';

const LayouApp = () => {

    const boxList = [
        { color: 'blue', text: '1' },
        { color: 'yellow', text: '2' },
        { color: 'pink', text: '3' },
        { color: 'gray', text: '4' },
        { color: 'orange', text: '5' },
        { color: 'purple', text: '6' },
        { color: 'green', text: '7' },
        { color: 'blue', text: '8' },
        { color: 'red', text: '9' },
        { color: 'green', text: '7' },
        { color: 'blue', text: '8' },
  
    ];

    const Box = ({ color, text }) => {
        return (
            <View style={[styles.boxSize, { backgroundColor: color }]}>
                <Text style={styles.text}>{text}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {boxList.map(({ color, text }) =>
                <Box color={color} text={text} />
            )}
        </View>);
};

export default LayouApp;


