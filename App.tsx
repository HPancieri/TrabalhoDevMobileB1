import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from "react";
import Movie from "./src/components/Movie";
import colors from "./src/components/Movie/colors";

export default function App() {

	const apiURL = "https://api.otaviolube.com/";
	const extMovies = "api/filmes?populate=*";

	let [ movies, setMovies ] = useState([]);

	useEffect(() => {
		fetch(apiURL + extMovies)
			.then(data => data.json())
			.then(obj => {
				setMovies(obj.data);
			});
	}, []);

	return (
		<View style={styles.container}>
			{
				(movies.length > 0) ?
					movies.map(movie => <Movie apiURL={apiURL} movie={movie}/>) :
					<Text style={styles.loadingText}>Carregando...</Text>
			}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.gray,
		alignItems: "center",
		justifyContent: "center",
	},
	loadingText: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
