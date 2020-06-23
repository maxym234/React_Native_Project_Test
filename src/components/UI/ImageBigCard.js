import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { w } from '../../../constants.js';

const ImageBigCard = ({data }) => {
	const {container, sub, cover} = styles
	const { image, name } = data;
	const img = `https${data.image.medium.slice(4)}`
	// console.log(data, ' data prps')
	return(
		<View style={container}>
			<View style={sub}>
				<Image style={cover} source={{uri: img}}/>	
			</View>
		</View>
	) 
}

const styles = StyleSheet.create({
	container:{
		paddingVertical: 20,
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
export {ImageBigCard}