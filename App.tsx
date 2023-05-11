import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useEffect, useState } from "react";
import Movie from "./src/components/Movie";
import colors from "./src/components/Movie/colors";
import { MovieType } from './src/components/Movie/MovieType';

export default function App() {

	const apiURL = "https://api.otaviolube.com";
	const extMovies = "/api/filmes?populate=*";

	let [ movies, setMovies ] = useState<MovieType[]>([]);

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
					<ScrollView horizontal pagingEnabled>
						{movies.map(movie => <Movie apiURL={apiURL} movie={movie} key={movie.id}/>)}
					</ScrollView> :
				<ActivityIndicator size="large" color={colors.nord0}/>
			}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.nord10,
		justifyContent: "center",
	},
});
