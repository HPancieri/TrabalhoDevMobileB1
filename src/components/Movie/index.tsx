import { Image, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useState } from "react";

interface MovieProps {
	apiURL: string,
	movie: {
		attributes: {
			titulo: string,
			subtitulo: string,
			sinopse: string,
			poster: {
				data: {
					attributes: {
						url: string,
					},
				},
			},
		},
	},
}

export default function Movie (props: MovieProps) {
	let [ readMore, setReadMore ] = useState(false);
	let tooMuchText = props.movie.attributes.sinopse.length >= 250;

	return (
		<View style={styles.MovieContainer}>
			<Image
				source={{ uri: props.apiURL + props.movie.attributes.poster.data.attributes.url }}
				style={styles.Image}
			/>

			<View style={styles.TextContainer}>
				<View style={styles.TitleSubtitleContainer}>
					<Text style={styles.Title}>{props.movie.attributes.titulo}</Text>

					{
						(props.movie.attributes.subtitulo) ?
							<Text style={styles.Subtitle}>{props.movie.attributes.subtitulo}</Text> :
							<></>
					}
				</View>

				{
					(tooMuchText) ?
						(!readMore) ?
							<>
								<Text style={styles.Description}>{props.movie.attributes.sinopse.slice(0, 250)}...</Text>
								<TouchableOpacity onPress={() => setReadMore(true)}>
									<Text style={styles.ShowMoreText}>Ler mais...</Text>
								</TouchableOpacity>
							</> :
							<>
								<Text style={styles.Description}>{props.movie.attributes.sinopse}</Text>
								<TouchableOpacity onPress={() => setReadMore(false)}>
									<Text style={styles.ShowMoreText}>Ler menos...</Text>
								</TouchableOpacity>
							</>
						:
						<Text style={styles.Description}>{props.movie.attributes.sinopse}</Text>
				}

				<TouchableOpacity style={styles.BuyBtn} onPress={() => {}}>
					<Text style={styles.BuyText}>Comprar Ingresso</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}