import React, {Components} from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Header, ImageBigCard } from '../components/UI';

// class DetailsScreen extends PureComponents
class DetailsScreen extends React.Component {

	render() {
		const { image, name, summary } = this.props.navigation.state.params;
		const { navigation } = this.props;
		const { container, h1, h2, sub} = styles;
		const data = { image };
		// console.log(this.props, 'propsdet')
		return(
		<View style={container}>
		 	<Header title={name} onPress={() => navigation.goBack()}
		 	leftIcon= 'ios-arrow-dropleft'
		 	leftColor='#fff'
		 	detail
		 	/>
			<ScrollView>
				<View style={sub}>
					<ImageBigCard data={data}/>
					<Text style={h1}>{name.toUpperCase()}</Text>
					<Text style={h2}>{summary.replace(/<[^>]+>/g,'')}</Text>
				</View>
			</ScrollView>
		</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
	sub: {
		flex: 1,
		alignItems: 'center',
		marginBottom: 300,
		backgroundColor: '#fff',
	},
	h1: {
		fontFamily: 'monospace',
		fontSize: 30,
		padding: 15,
		textAlign: 'center',
	},
	h2: {
		fontFamily: 'sans-serif-condensed',
		fontSize: 20,
		padding: 15,
		color: 'grey',
		paddingHorizontal: 15,
		textAlign: 'center',
	}
})
export default DetailsScreen;