import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { w } from '../../../constants.js';

const ImageCard = ({data, onPress}) => {
	const {container, sub, h1, cover} = styles
	const { image, name } = data;
	const img = `https${data.image.medium.slice(4)}`
	// console.log(data, ' data prps')
	return(
		<TouchableOpacity onPress={onPress}>
		<View style={container}>
			<View style={sub}>
				<Image style={cover} source={{uri: img}}/>	
			</View>
			<Text style={h1}>{name.toUpperCase()}</Text>
		</View>
		</TouchableOpacity>
	) 
}

const styles = StyleSheet.create({
	container:{
		width: w / 2.1,
		paddingVertical: 10,
		padding: 10,
	},
	sub:{
		// padding: 10,
		shadowColor: '#000',
		shadowRadius: 8,
		shadowOffset: { width: 10, height: 15},
		shadowOpacity: 0.1,
		width: w / 2.4,
		height: w/ 2.9, 
		borderColor:'#000',
		borderRadius:10,
		elevation: 2,
	},
	h1: {
		fontFamily: 'sans-serif-medium',
		fontSize: 18,
		alignSelf: 'center',
		textAlign: 'center',
		width: w / 2.4,
	},
	cover: {
		width: w / 2.5,
		height: w/ 3, 
		borderRadius: 10
	},
})
export {ImageCard}