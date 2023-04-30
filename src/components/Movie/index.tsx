import { Image, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { MovieType } from "./MovieType";

export default function Movie ({apiURL, movie}: {apiURL: string, movie: MovieType}) {
	let [ readMore, setReadMore ] = useState(false);
	let tooMuchText = movie.attributes.sinopse.length >= 250;

	return (
		<View style={styles.MovieContainer}>
			<Image
				source={{ uri: apiURL + movie.attributes.poster.data.attributes.url }}
				style={styles.Image}
			/>

			<View style={styles.TextContainer}>
				<View style={styles.TitleSubtitleContainer}>
					<Text style={styles.Title}>{movie.attributes.titulo}</Text>

					{
						// Renders subtitle information, if it exists;
						(movie.attributes.subtitulo) ?
							<Text style={styles.Subtitle}>{movie.attributes.subtitulo}</Text> :
							<></>
					}
				</View>

				{
					// Controls read more functionality;
					(tooMuchText) ?
						(!readMore) ?
							// tooMuchText AND NOT readMore;
							<>
								<Text style={styles.Description}>{movie.attributes.sinopse.slice(0, 250)}...</Text>
								<TouchableOpacity onPress={() => setReadMore(true)}>
									<Text style={styles.ShowMoreText}>Ler mais...</Text>
								</TouchableOpacity>
							</> :
							// tooMuchText AND readMore;
							<>
								<Text style={styles.Description}>{movie.attributes.sinopse}</Text>
								<TouchableOpacity onPress={() => setReadMore(false)}>
									<Text style={styles.ShowMoreText}>Ler menos...</Text>
								</TouchableOpacity>
							</>
						:
						// NOT tooMuchText;
						<Text style={styles.Description}>{movie.attributes.sinopse}</Text>
				}

				<TouchableOpacity style={styles.BuyBtn} onPress={() => {}}>
					<Text style={styles.BuyText}>Comprar Ingresso</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
