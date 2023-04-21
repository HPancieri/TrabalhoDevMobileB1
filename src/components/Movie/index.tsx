import { Image, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function Movie (props: any) {
	let [ readMore, setReadMore ] = useState(false);
	let tooMuchText = props.movie.attributes.sinopse.length >= 250;

	return (
		<View style={styles.MovieContainer}>
			<Image
				source={{ uri: props.apiURL + props.movie.attributes.poster.data.attributes.url }}
				style={styles.Image}
			/>

			<View style={styles.TextContainer}>
				<Text style={styles.Title}>{props.movie.attributes.titulo}</Text>

				{
					(tooMuchText && !readMore) ?
						<>
							<Text style={styles.Description}>{props.movie.attributes.sinopse.slice(0, 250)}...</Text>
							<TouchableOpacity onPress={() => setReadMore(true)}>
								<Text style={styles.ShowMoreText}>Ler mais...</Text>
							</TouchableOpacity>
						</> : (tooMuchText && readMore) ?
						<>
							<Text style={styles.Description}>{props.movie.attributes.sinopse}</Text>
							<TouchableOpacity onPress={() => setReadMore(false)}>
								<Text style={styles.ShowMoreText}>Ler menos...</Text>
							</TouchableOpacity>
						</> :
						<Text style={styles.Description}>{props.movie.attributes.sinopse}</Text>
				}

				<TouchableOpacity style={styles.BuyBtn} onPress={() => {}}>
					<Text style={styles.BuyText}>Comprar Ingresso</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}