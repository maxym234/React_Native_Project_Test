import React from 'react'
import{ View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { w } from '../../../constants.js'
const Header = ({ title, detail, leftColor, onPress, leftIcon }) => {
	// console.log(props)
  const { container, textStyle, leftButtonStyle} = styles;
	return(
    <SafeAreaView style={{backgroundColor: 'red'}}>
    	<View style={container}>
        <TouchableOpacity onPress={onPress}>
          <Ionicons name={leftIcon} style={[leftButtonStyle, {paddingLeft: detail ? 10 : 25}]} color={leftColor}/>
        </TouchableOpacity>
        <Text numberOfLines={1} ellipsizeMode='tail' style={[textStyle, {paddingLeft: leftIcon ? 10 : 0}]}>{title}</Text>
    	</View>
    </SafeAreaView>
	)
} 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
   // flex: 1,
    backgroundColor: '#30d0fe',
    height: 116,
    paddingLeft: 22,
    paddingTop: 71,
    // justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2}, 
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    width: w - 80,
    color: '#fff',
    fontSize: 28,
    fontFamily: 'sans-serif-light',
  },
  leftButtonStyle: {
    paddingTop: 3,
    fontSize: 35,
  }
});

export {Header} 