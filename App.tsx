import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from "react";
import Movie from "./src/components/Movie";
import colors from "./src/components/Movie/colors";

export default function App() {

	const apiURL = "https://api.otaviolube.com";
	const extMovies = "/api/filmes?populate=*";

	let [ movies, setMovies ] = useState([]);

	// Fetches API response and sets it to the movies variable;
	useEffect(() => {
		fetch(apiURL + extMovies)
			.then(data => data.json())
			.then(obj => {
				setMovies(obj.data);
			});
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			{
				(movies.length > 0) ?
					movies.map(movie => <Movie apiURL={apiURL} movie={movie}/>) :
					<ActivityIndicator size="large" color={colors.darkerBlue}/>
			}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightGreen,
		alignItems: "center",
		justifyContent: "center",
	},
});
