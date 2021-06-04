import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
        alignContent: 'center',
        justifyContent:'flex-start',
    },

    boxSize: {
        width: 100,
        height: 100,
        margin: 5,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'gray',
        
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    }
});
