import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
	
    backGroundModal : {
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },

	center: {
		justifyContent: 'center', 
		alignItems: 'center'
	},

    modalContainer: {
        width: 250, 
        height: 100, 
        backgroundColor: 'white',
        borderRadius: 10,
    },

    modalText:{
        fontWeight: 'bold', 
        fontSize: 25, 
        color: 'black'
    }


});