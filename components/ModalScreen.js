import React, { useState } from 'react';
import { Modal, Text, View, Button } from 'react-native';
import {style} from './ModalScreenStyles';

const ModalScreen = ({showModal,setShowModal}) => {
	

	return (
		<Modal visible={showModal} transparent={true}>
			<View style={[ {flex: 1}, style.center, style.backGroundModal]}>
			<View style={[ style.modalContainer, style.center ]}>
				<Text style={style.modalText}>Hola Modal</Text>
				<Button title={'closeModal'}  onPress={() =>{ setShowModal(false)}}></Button>
			</View>
			</View>
		</Modal>
	);
};


export default ModalScreen;